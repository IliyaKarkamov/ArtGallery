import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtistsService} from '../../../../services/artists/artists.service';

@Component({
  selector: 'app-artists-activation',
  templateUrl: './artists-activation.component.html',
  styleUrls: ['./artists-activation.component.scss']
})
export class ArtistsActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) {
  }

  ngOnInit() {
    const artistId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.artistsService.activation(artistId, this.isActivation)
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
