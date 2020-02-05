import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleriesService} from '../../../../services/galleries/galleries.service';
import {Gallery} from '../../../../models/gallery';

@Component({
  selector: 'app-galleries-preview',
  templateUrl: './galleries-preview.component.html',
  styleUrls: ['./galleries-preview.component.scss']
})
export class GalleriesPreviewComponent implements OnInit {
  gallery: Gallery = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    const artistId = +this.route.snapshot.paramMap.get('id');

    this.galleriesService.get(artistId)
      .subscribe(data => {
        this.gallery = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
