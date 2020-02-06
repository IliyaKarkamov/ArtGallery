import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Room} from '../../../models/room';
import {RoomsService} from '../../../services/rooms/rooms.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() galleryId: number;

  // @ts-ignore
  @ViewChild('childMenu') public childMenu;

  private rooms: Room[] = [];

  constructor(public router: Router, private roomsService: RoomsService) {
  }

  ngOnInit() {
    this.roomsService.getAllForGallery(this.galleryId)
      .subscribe(data => {
        this.rooms = data.result;
      });
  }
}
