import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RoomsService} from '../../../../services/rooms/rooms.service';
import {Room} from '../../../../models/room';
import {Gallery} from '../../../../models/gallery';
import {GalleriesService} from '../../../../services/galleries/galleries.service';

@Component({
  selector: 'app-rooms-edit',
  templateUrl: './rooms-edit.component.html',
  styleUrls: ['./rooms-edit.component.scss']
})
export class RoomsEditComponent implements OnInit {
  private form: FormGroup;

  private room: Room = null;
  private galleries: Gallery[] = [];

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
              private roomsService: RoomsService, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    const roomId = +this.route.snapshot.paramMap.get('id');

    this.roomsService.get(roomId)
      .subscribe(data => {
        this.room = data.result;
        this.loadGalleries();
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

    const selectedGallery = this.form.value.gallery;

    const room = new Room();
    Object.assign(room, this.form.value);

    room.gallery = this.galleries.find(value => value.id === selectedGallery);

    this.roomsService.edit(this.room.id, room)
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
      name: [this.room.name, Validators.required],
      location: [this.room.location],
      gallery: [this.room.gallery != null ? this.room.gallery.id : ''],
      active: [this.room.active]
    });
  }

  private loadGalleries() {
    this.galleriesService.getAllActive()
      .subscribe(data => {
        if (data.result != null) {
          this.galleries = data.result;
        }
        this.createForm();
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }
}
