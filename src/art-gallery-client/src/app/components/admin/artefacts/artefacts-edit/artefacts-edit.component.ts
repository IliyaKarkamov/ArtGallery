import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Exhibition} from '../../../../models/exhibition';
import {Era} from '../../../../models/era';
import {Style} from '../../../../models/style';
import {Artist} from '../../../../models/artist';
import {ActivatedRoute} from '@angular/router';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';
import {ErasService} from '../../../../services/eras/eras.service';
import {StylesService} from '../../../../services/styles/styles.service';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {DatePipe} from '@angular/common';
import {ArtefactsService} from '../../../../services/artefacts/artefacts.service';
import {Artefact} from '../../../../models/artefact';

@Component({
  selector: 'app-artefacts-edit',
  templateUrl: './artefacts-edit.component.html',
  styleUrls: ['./artefacts-edit.component.scss']
})
export class ArtefactsEditComponent implements OnInit {
  private form: FormGroup;

  private artefact: Artefact = null;

  private eras: Era[] = [];
  private styles: Style[] = [];
  private exhibitions: Exhibition[] = [];
  private artists: Artist[] = [];

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private artefactsService: ArtefactsService,
              private erasService: ErasService,
              private stylesService: StylesService,
              private exhibitionsService: ExhibitionsService,
              private artistsService: ArtistsService) {
  }

  ngOnInit() {
    const artefactId = +this.route.snapshot.paramMap.get('id');

    this.artefactsService.get(artefactId)
      .subscribe(data => {
        this.artefact = data.result;
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
    const selectedExhibition = this.form.value.exhibition;
    const selectedArtist = this.form.value.artist;

    const artefact = new Artefact();
    Object.assign(artefact, this.form.value);

    artefact.era = this.eras.find(value => value.id === selectedEra);
    artefact.style = this.styles.find(value => value.id === selectedStyle);
    artefact.exhibition = this.exhibitions.find(value => value.id === selectedExhibition);
    artefact.artist = this.artists.find(value => value.id === selectedArtist);

    artefact.createdAt = new DatePipe('en').transform(this.form.value.createdAt, 'yyyy-MM-dd');

    this.artefactsService.edit(this.artefact.id, artefact)
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
      name: [this.artefact.name, Validators.required],
      createdAt: [this.artefact.createdAt],
      price: [this.artefact.price],
      era: [this.artefact.era != null ? this.artefact.era.id : ''],
      style: [this.artefact.style != null ? this.artefact.style.id : ''],
      exhibition: [this.artefact.exhibition != null ? this.artefact.exhibition.id : ''],
      artist: [this.artefact.artist != null ? this.artefact.artist.id : ''],
      active: [this.artefact.active]
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

    this.createForm();
  }
}
