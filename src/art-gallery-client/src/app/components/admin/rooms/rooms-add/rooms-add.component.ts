import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoomsService} from '../../../../services/rooms/rooms.service';
import {GalleriesService} from '../../../../services/galleries/galleries.service';
import {MatTableDataSource} from '@angular/material';
import {Gallery} from '../../../../models/gallery';
import {Room} from '../../../../models/room';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  private galleries: Gallery[] = [];

  constructor(private formBuilder: FormBuilder, private roomsService: RoomsService, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    this.galleriesService.getAllActive()
      .subscribe(data => {
        this.galleries = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      location: [''],
      gallery: [''],
      active: [true]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const selectedGallery = this.form.value.gallery;

    const room = new Room();
    Object.assign(room, this.form.value);

    room.gallery = this.galleries.find(value => value.id === selectedGallery);

    this.roomsService.add(room)
      .subscribe(data => {
        this.isAddedSuccessfully = data.result != null;
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
}
