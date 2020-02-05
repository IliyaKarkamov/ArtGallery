import {Component, OnInit} from '@angular/core';
import {Room} from '../../../../models/room';
import {ActivatedRoute} from '@angular/router';
import {RoomsService} from '../../../../services/rooms/rooms.service';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../../models/exhibition';

@Component({
  selector: 'app-exhibitions-preview',
  templateUrl: './exhibitions-preview.component.html',
  styleUrls: ['./exhibitions-preview.component.scss']
})
export class ExhibitionsPreviewComponent implements OnInit {
  exhibition: Exhibition = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private exhibitionsService: ExhibitionsService) {
  }

  ngOnInit() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.exhibitionsService.get(exhibitionId)
      .subscribe(data => {
        this.exhibition = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
