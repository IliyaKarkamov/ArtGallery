import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../models/exhibition';
import {Artefact} from '../../../models/artefact';
import {ArtefactsService} from '../../../services/artefacts/artefacts.service';

@Component({
  selector: 'app-preview-exhibition',
  templateUrl: './preview-exhibition.component.html',
  styleUrls: ['./preview-exhibition.component.scss']
})
export class PreviewExhibitionComponent implements OnInit {
  private exhibition: Exhibition;
  private artefacts: Artefact[];

  constructor(private route: ActivatedRoute, private exhibitionsService: ExhibitionsService, private artefactsService: ArtefactsService) {
    this.route.params.subscribe(() => {
      this.load();
    });
  }

  ngOnInit() {
  }

  private load() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.exhibitionsService.get(exhibitionId)
      .subscribe(data => {
        this.exhibition = data.result;
      });

    this.artefactsService.getAllForExhibition(exhibitionId)
      .subscribe(data => {
        this.artefacts = data.result;
      });
  }
}
