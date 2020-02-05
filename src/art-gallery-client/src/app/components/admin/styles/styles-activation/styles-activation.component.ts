import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StylesService} from '../../../../services/styles/styles.service';

@Component({
  selector: 'app-styles-activation',
  templateUrl: './styles-activation.component.html',
  styleUrls: ['./styles-activation.component.scss']
})
export class StylesActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private stylesService: StylesService) {
  }

  ngOnInit() {
    const styleId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.stylesService.activation(styleId, this.isActivation)
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
