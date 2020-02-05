import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ErasService} from '../../../../services/eras/eras.service';

@Component({
  selector: 'app-eras-activation',
  templateUrl: './eras-activation.component.html',
  styleUrls: ['./eras-activation.component.scss']
})
export class ErasActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private erasService: ErasService) {
  }

  ngOnInit() {
    const eraId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.erasService.activation(eraId, this.isActivation)
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
