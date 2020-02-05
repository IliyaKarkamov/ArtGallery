import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Gallery} from '../../../../models/gallery';
import {GalleriesService} from '../../../../services/galleries/galleries.service';

@Component({
  selector: 'app-galleries-edit',
  templateUrl: './galleries-edit.component.html',
  styleUrls: ['./galleries-edit.component.scss']
})
export class GalleriesEditComponent implements OnInit {
  private form: FormGroup;

  private gallery: Gallery = null;

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    const galleryId = +this.route.snapshot.paramMap.get('id');

    this.galleriesService.get(galleryId)
      .subscribe(data => {
        this.gallery = data.result;
        this.createForm();
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.galleriesService.edit(this.gallery.id, this.form.value)
      .subscribe(data => {
        this.isEditedSuccessfully = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  onReset() {
    this.form.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: [this.gallery.name, Validators.required],
      address: [this.gallery.address, Validators.required],
      longitude: [this.gallery.longitude],
      latitude: [this.gallery.latitude],
      description: [this.gallery.description],
      active: [this.gallery.active]
    });
  }
}
