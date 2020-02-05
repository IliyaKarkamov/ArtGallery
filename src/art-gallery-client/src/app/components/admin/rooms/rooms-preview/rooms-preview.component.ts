import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomsService} from '../../../../services/rooms/rooms.service';
import {Room} from '../../../../models/room';

@Component({
  selector: 'app-rooms-preview',
  templateUrl: './rooms-preview.component.html',
  styleUrls: ['./rooms-preview.component.scss']
})
export class RoomsPreviewComponent implements OnInit {
  room: Room = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private roomsService: RoomsService) {
  }

  ngOnInit() {
    const roomId = +this.route.snapshot.paramMap.get('id');

    this.roomsService.get(roomId)
      .subscribe(data => {
        this.room = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
