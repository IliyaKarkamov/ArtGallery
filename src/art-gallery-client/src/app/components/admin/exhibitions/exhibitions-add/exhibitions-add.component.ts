import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';
import {ErasService} from '../../../../services/eras/eras.service';
import {Era} from '../../../../models/era';
import {Exhibition} from '../../../../models/exhibition';
import {Style} from '../../../../models/style';
import {Artist} from '../../../../models/artist';
import {StylesService} from '../../../../services/styles/styles.service';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {DatePipe} from '@angular/common';
import {RoomsService} from '../../../../services/rooms/rooms.service';
import {Room} from '../../../../models/room';

@Component({
  selector: 'app-exhibitions-add',
  templateUrl: './exhibitions-add.component.html',
  styleUrls: ['./exhibitions-add.component.scss']
})
export class ExhibitionsAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  private eras: Era[] = [];
  private styles: Style[] = [];
  private artists: Artist[] = [];
  private rooms: Room[] = [];

  constructor(private formBuilder: FormBuilder,
              private exhibitionsService: ExhibitionsService,
              private erasService: ErasService,
              private stylesService: StylesService,
              private artistsService: ArtistsService,
              private roomsService: RoomsService) {
  }

  ngOnInit() {
    this.erasService.getAllActive()
      .subscribe(data => {
        if (data.result != null) {
          this.eras = data.result;
        }
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.stylesService.getAllActive()
      .subscribe(data => {
        if (data.result != null) {
          this.styles = data.result;
        }
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.artistsService.getAllActive()
      .subscribe(data => {
        if (data.result != null) {
          this.artists = data.result;
        }
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.roomsService.getAllActive()
      .subscribe(data => {
        if (data.result != null) {
          this.rooms = data.result;
        }
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      era: [''],
      style: [''],
      artist: [''],
      room: ['']
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const selectedEra = this.form.value.era;
    const selectedStyle = this.form.value.style;
    const selectedArtist = this.form.value.artist;
    const selectedRoom = this.form.value.room;

    const exhibition = new Exhibition();
    Object.assign(exhibition, this.form.value);

    exhibition.era = this.eras.find(value => value.id === selectedEra);
    exhibition.style = this.styles.find(value => value.id === selectedStyle);
    exhibition.artist = this.artists.find(value => value.id === selectedArtist);
    exhibition.room = this.rooms.find(value => value.id === selectedRoom);

    exhibition.startDate = new DatePipe('en').transform(this.form.value.startDate, 'yyyy-MM-dd');
    exhibition.endDate = new DatePipe('en').transform(this.form.value.endDate, 'yyyy-MM-dd');

    this.exhibitionsService.add(exhibition)
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
