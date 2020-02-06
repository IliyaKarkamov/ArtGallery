import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../../models/room';
import {Exhibition} from '../../../models/exhibition';
import {RoomsService} from '../../../services/rooms/rooms.service';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  private room: Room;
  private exhibitions: Exhibition[] = [];

  constructor(private route: ActivatedRoute, private roomsService: RoomsService, private exhibitionsService: ExhibitionsService) {
    this.route.params.subscribe(() => {
      this.load();
    });
  }

  ngOnInit() {
    this.load();
  }

  private load() {
    const roomId = +this.route.snapshot.paramMap.get('id');

    this.roomsService.get(roomId)
      .subscribe(data => {
        this.room = data.result;
      });

    this.exhibitionsService.getAllForRoom(roomId)
      .subscribe(data => {
        this.exhibitions = data.result;
      });
  }
}
