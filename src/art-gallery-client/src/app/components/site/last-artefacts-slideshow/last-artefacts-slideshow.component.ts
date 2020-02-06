import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-artefacts-slideshow',
  templateUrl: './last-artefacts-slideshow.component.html',
  styleUrls: ['./last-artefacts-slideshow.component.scss']
})
export class LastArtefactsSlideshowComponent implements OnInit {
  private imagesCount = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.imagesCount[i] = 20 + i;
    }
  }

}
