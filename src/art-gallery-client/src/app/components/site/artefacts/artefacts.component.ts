import {Component, Input, OnInit} from '@angular/core';
import {Artefact} from '../../../models/artefact';
import {ArtefactsService} from '../../../services/artefacts/artefacts.service';

@Component({
  selector: 'app-artefacts',
  templateUrl: './artefacts.component.html',
  styleUrls: ['./artefacts.component.scss']
})
export class ArtefactsComponent implements OnInit {
  breakpoint = 4;
  @Input() artefacts: Artefact[] = null;

  constructor(private artefactsService: ArtefactsService) {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;

    if (this.artefacts == null) {
      this.artefactsService.getAll()
        .subscribe(data => {
          this.artefacts = data.result;
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
