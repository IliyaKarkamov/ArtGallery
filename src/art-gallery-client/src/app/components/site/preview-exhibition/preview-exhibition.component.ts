import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExhibitionsService} from '../../../services/exhibitions/exhibitions.service';
import {Exhibition} from '../../../models/exhibition';

@Component({
  selector: 'app-preview-exhibition',
  templateUrl: './preview-exhibition.component.html',
  styleUrls: ['./preview-exhibition.component.scss']
})
export class PreviewExhibitionComponent implements OnInit {
  private exhibition: Exhibition;

  constructor(private route: ActivatedRoute, private exhibitionsService: ExhibitionsService) {
    this.route.params.subscribe(() => {
      this.load();
    });
  }

  ngOnInit() {
  }

  private load() {
    const exhibitionId = +this.route.snapshot.paramMap.get('id');

    this.exhibitionsService.get(exhibitionId)
      .subscribe(data => {
        this.exhibition = data.result;
      });
  }
}
