package com.apus.artgallery.services;

import com.apus.artgallery.models.Picture;
import com.apus.artgallery.repositories.PictureRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Service
public class PictureService {
    private final PictureRepository pictureRepository;
    private final File storeDirectory;

    public PictureService(PictureRepository pictureRepository, @Value("${image.storage}") String storeDirectory) {
        this.pictureRepository = pictureRepository;
        this.storeDirectory = new File(storeDirectory);
    }

    private File generateNewFile(String name) {
        return new File(this.storeDirectory, name);
    }

    private void saveImageToFile(String name, MultipartFile file) {
        if (file == null)
            throw new IllegalArgumentException("File is missing");

        File newFile = generateNewFile(name);

        try (InputStream in = file.getInputStream();
             OutputStream out = new FileOutputStream(newFile)) {
            FileCopyUtils.copy(in, out);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public Picture savePicture(Picture picture) {
        pictureRepository.save(picture);

        return picture;
    }

    public void addFileForImage(Long id, MultipartFile file) {
        Picture picture = pictureRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No picture found"));

        saveImageToFile(picture.getStoredName(), file);
    }

    public Resource getPictureFromStorage(Long id) {
        Picture picture = pictureRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No picture found"));

        return new FileSystemResource(generateNewFile(picture.getStoredName()));
    }
}