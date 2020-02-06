import {Component, OnInit} from '@angular/core';
import {ArtefactsService} from '../../../services/artefacts/artefacts.service';
import {Artefact} from '../../../models/artefact';

@Component({
  selector: 'app-last-artefacts',
  templateUrl: './last-artefacts.component.html',
  styleUrls: ['./last-artefacts.component.scss']
})
export class LastArtefactsComponent implements OnInit {
  private artefacts: Artefact[] = [];
  private imagesCount = [];

  constructor(private artefactsService: ArtefactsService) {
  }

  ngOnInit() {
    this.artefactsService.getNewest(3)
      .subscribe(data => {
        this.artefacts = data.result;
      });

    for (let i = 0; i < 5; i++) {
      this.imagesCount[i] = 30 + i;
    }
  }
}
