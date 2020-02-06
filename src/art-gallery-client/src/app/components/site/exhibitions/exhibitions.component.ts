import {Component, Input, OnInit} from '@angular/core';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../models/exhibition';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {
  breakpoint = 4;
  @Input() exhibitions: Exhibition[] = null;

  constructor(private exhibitionsService: ExhibitionsService) {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;

    if (this.exhibitions == null) {
      this.exhibitionsService.getAll()
        .subscribe(data => {
          this.exhibitions = data.result;
        });
    }
  }

  onResize(event) {
    const innerWidth = event.target.innerWidth;

    if (innerWidth <= 600) {
      this.breakpoint = 1;
    } else if (innerWidth <= 1000) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 4;
    }
  }
}
