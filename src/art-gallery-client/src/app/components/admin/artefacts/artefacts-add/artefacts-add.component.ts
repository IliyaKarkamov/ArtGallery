import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Era} from '../../../../models/era';
import {Style} from '../../../../models/style';
import {Artist} from '../../../../models/artist';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';
import {ErasService} from '../../../../services/eras/eras.service';
import {StylesService} from '../../../../services/styles/styles.service';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {Exhibition} from '../../../../models/exhibition';
import {DatePipe} from '@angular/common';
import {ArtefactsService} from '../../../../services/artefacts/artefacts.service';
import {Artefact} from '../../../../models/artefact';

@Component({
  selector: 'app-artefacts-add',
  templateUrl: './artefacts-add.component.html',
  styleUrls: ['./artefacts-add.component.scss']
})
export class ArtefactsAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  private eras: Era[] = [];
  private styles: Style[] = [];
  private exhibitions: Exhibition[] = [];
  private artists: Artist[] = [];

  constructor(private formBuilder: FormBuilder,
              private artefactsService: ArtefactsService,
              private erasService: ErasService,
              private stylesService: StylesService,
              private exhibitionsService: ExhibitionsService,
              private artistsService: ArtistsService) {
  }

  ngOnInit() {
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

    this.exhibitionsService.getAll()
      .subscribe(data => {
        this.exhibitions = data.result;
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

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      createdAt: [''],
      price: [''],
      era: [''],
      style: [''],
      exhibition: [''],
      artist: [''],
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

    const selectedEra = this.form.value.era;
    const selectedStyle = this.form.value.style;
    const selectedExhibition = this.form.value.exhibition;
    const selectedArtist = this.form.value.artist;

    const artefact = new Artefact();
    Object.assign(artefact, this.form.value);

    artefact.era = this.eras.find(value => value.id === selectedEra);
    artefact.style = this.styles.find(value => value.id === selectedStyle);
    artefact.exhibition = this.exhibitions.find(value => value.id === selectedExhibition);
    artefact.artist = this.artists.find(value => value.id === selectedArtist);

    artefact.createdAt = new DatePipe('en').transform(this.form.value.createdAt, 'yyyy-MM-dd');

    this.artefactsService.add(artefact)
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
