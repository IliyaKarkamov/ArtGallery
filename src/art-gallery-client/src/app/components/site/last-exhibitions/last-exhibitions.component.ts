import {Component, OnInit} from '@angular/core';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../models/exhibition';

@Component({
  selector: 'app-last-exhibitions',
  templateUrl: './last-exhibitions.component.html',
  styleUrls: ['./last-exhibitions.component.scss']
})
export class LastExhibitionsComponent implements OnInit {
  private exhibitions: Exhibition[] = [];
  private imagesCount = [];

  constructor(private exhibitionsService: ExhibitionsService) {
  }

  ngOnInit() {
    this.exhibitionsService.getNewest(3)
      .subscribe(data => {
        this.exhibitions = data.result;
      });

    for (let i = 0; i < 5; i++) {
      this.imagesCount[i] = i;
    }
  }
}
