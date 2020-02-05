import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomsService} from '../../../../services/rooms/rooms.service';

@Component({
  selector: 'app-rooms-activation',
  templateUrl: './rooms-activation.component.html',
  styleUrls: ['./rooms-activation.component.scss']
})
export class RoomsActivationComponent implements OnInit {
  private errorMessage = '';
  private isActivationSuccessfully = false;

  private isActivation = false;

  constructor(private route: ActivatedRoute, private roomsService: RoomsService) {
  }

  ngOnInit() {
    const roomId = +this.route.snapshot.paramMap.get('id');
    const activateAction = this.route.snapshot.queryParamMap.get('activate');

    this.isActivation = activateAction === 'true';

    this.roomsService.activation(roomId, this.isActivation)
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
