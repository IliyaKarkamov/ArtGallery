import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {Artist} from '../../../../models/artist';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-artists-edit',
  templateUrl: './artists-edit.component.html',
  styleUrls: ['./artists-edit.component.scss']
})
export class ArtistsEditComponent implements OnInit {
  private form: FormGroup;

  private artist: Artist = null;

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private artistsService: ArtistsService) {
  }

  ngOnInit() {
    const artistsId = +this.route.snapshot.paramMap.get('id');

    this.artistsService.get(artistsId)
      .subscribe(data => {
        this.artist = data.result;
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

    const artist = new Artist();
    Object.assign(artist, this.form.value);

    artist.birthDate = new DatePipe('en').transform(this.form.value.birthDate, 'yyyy-MM-dd');

    this.artistsService.edit(this.artist.id, artist)
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
      firstName: [this.artist.firstName, Validators.required],
      secondName: [this.artist.secondName],
      lastName: [this.artist.lastName, Validators.required],
      alias: [this.artist.alias],
      birthDate: [this.artist.birthDate],
      birthPlace: [this.artist.birthPlace],
      shortBio: [this.artist.shortBio],
      longBio: [this.artist.longBio],
      active: [this.artist.active]
    });
  }
}
