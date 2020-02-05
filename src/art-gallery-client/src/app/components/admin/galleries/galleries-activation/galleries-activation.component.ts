import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleriesService} from '../../../../services/galleries/galleries.service';

@Component({
  selector: 'app-galleries-activation',
  templateUrl: './galleries-activation.component.html',
  styleUrls: ['./galleries-activation.component.scss']
})
export class GalleriesActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    const galleryId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.galleriesService.activation(galleryId, this.isActivation)
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
