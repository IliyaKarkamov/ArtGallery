import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtefactsService} from '../../../../services/artefacts/artefacts.service';

@Component({
  selector: 'app-artefacts-activation',
  templateUrl: './artefacts-activation.component.html',
  styleUrls: ['./artefacts-activation.component.scss']
})
export class ArtefactsActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private artefactsService: ArtefactsService) {
  }

  ngOnInit() {
    const artefactId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.artefactsService.activation(artefactId, this.isActivation)
      .subscribe(data => {
        this.isActivationSuccessfully = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }
}
