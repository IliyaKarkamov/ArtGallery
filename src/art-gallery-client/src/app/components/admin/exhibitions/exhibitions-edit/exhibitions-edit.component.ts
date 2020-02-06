import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Room} from '../../../../models/room';
import {ActivatedRoute} from '@angular/router';
import {Era} from '../../../../models/era';
import {Style} from '../../../../models/style';
import {Artist} from '../../../../models/artist';
import {ErasService} from '../../../../services/eras/eras.service';
import {StylesService} from '../../../../services/styles/styles.service';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../../models/exhibition';
import {DatePipe} from '@angular/common';
import {RoomsService} from '../../../../services/rooms/rooms.service';

@Component({
  selector: 'app-exhibitions-edit',
  templateUrl: './exhibitions-edit.component.html',
  styleUrls: ['./exhibitions-edit.component.scss']
})
export class ExhibitionsEditComponent implements OnInit {
  private form: FormGroup;

  private exhibition: Exhibition = null;

  private eras: Era[] = [];
  private styles: Style[] = [];
  private artists: Artist[] = [];
  private rooms: Room[] = [];

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private exhibitionsService: ExhibitionsService,
              private erasService: ErasService,
              private stylesService: StylesService,
              private artistsService: ArtistsService,
              private roomsService: RoomsService) {
  }

  ngOnInit() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.exhibitionsService.get(exhibitionId)
      .subscribe(data => {
        this.exhibition = data.result;
        this.loadNomenclatures();
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

    console.log(this.form.value);

    this.exhibitionsService.edit(this.exhibition.id, exhibition)
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
      name: [this.exhibition.name, Validators.required],
      startDate: [this.exhibition.startDate],
      endDate: [this.exhibition.endDate],
      era: [this.exhibition.era != null ? this.exhibition.era.id : ''],
      style: [this.exhibition.style != null ? this.exhibition.style.id : ''],
      artist: [this.exhibition.artist != null ? this.exhibition.artist.id : ''],
      room: [this.exhibition.room != null ? this.exhibition.room.id : '']
    });
  }

  private loadNomenclatures() {
    this.erasService.getAllActive()
      .subscribe(data => {
        this.eras = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.stylesService.getAllActive()
      .subscribe(data => {
        this.styles = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.artistsService.getAllActive()
      .subscribe(data => {
        this.artists = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.roomsService.getAllActive()
      .subscribe(data => {
        this.rooms = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });

    this.createForm();
  }
}
