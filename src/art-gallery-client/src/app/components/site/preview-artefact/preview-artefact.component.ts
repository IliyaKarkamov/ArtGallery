import {Component, OnInit} from '@angular/core';
import {Exhibition} from '../../../models/exhibition';
import {Artefact} from '../../../models/artefact';
import {ActivatedRoute} from '@angular/router';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';
import {ArtefactsService} from '../../../services/artefacts/artefacts.service';

@Component({
  selector: 'app-preview-artefact',
  templateUrl: './preview-artefact.component.html',
  styleUrls: ['./preview-artefact.component.scss']
})
export class PreviewArtefactComponent implements OnInit {
  private artefact: Artefact;
  private imagesCount = [];

  constructor(private route: ActivatedRoute, private artefactsService: ArtefactsService) {
    this.route.params.subscribe(() => {
      this.load();
    });

    for (let i = 0; i < 5; i++) {
      this.imagesCount[i] = i;
    }
  }

  ngOnInit() {
  }

  private load() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.artefactsService.get(exhibitionId)
      .subscribe(data => {
        this.artefact = data.result;
      });
  }
}
