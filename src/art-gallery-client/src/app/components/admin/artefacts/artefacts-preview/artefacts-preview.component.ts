import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtefactsService} from '../../../../services/artefacts/artefacts.service';
import {Artefact} from '../../../../models/artefact';

@Component({
  selector: 'app-artefacts-preview',
  templateUrl: './artefacts-preview.component.html',
  styleUrls: ['./artefacts-preview.component.scss']
})
export class ArtefactsPreviewComponent implements OnInit {
  artefact: Artefact = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private artefactsService: ArtefactsService) {
  }

  ngOnInit() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.artefactsService.get(exhibitionId)
      .subscribe(data => {
        this.artefact = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
