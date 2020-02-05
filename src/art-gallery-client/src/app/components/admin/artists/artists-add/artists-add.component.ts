import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {Artist} from '../../../../models/artist';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-artists-add',
  templateUrl: './artists-add.component.html',
  styleUrls: ['./artists-add.component.scss']
})
export class ArtistsAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  constructor(private formBuilder: FormBuilder, private artistsService: ArtistsService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      alias: [''],
      birthDate: [''],
      birthPlace: [''],
      shortBio: [''],
      longBio: [''],
      active: ['']
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const artist = new Artist();
    Object.assign(artist, this.form.value);

    artist.birthDate = new DatePipe('en').transform(this.form.value.birthDate, 'yyyy-MM-dd');

    this.artistsService.add(artist)
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
