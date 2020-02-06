import {Component, OnInit} from '@angular/core';
import {Artefact} from '../../../models/artefact';
import {ArtefactsService} from '../../../services/artefacts/artefacts.service';
import {Artist} from '../../../models/artist';
import {ArtistsService} from '../../../services/artists/artists.service';

@Component({
  selector: 'app-last-artists',
  templateUrl: './last-artists.component.html',
  styleUrls: ['./last-artists.component.scss']
})
export class LastArtistsComponent implements OnInit {
  private artists: Artist[] = [];
  private imagesCount = [];

  constructor(private artistsService: ArtistsService) {
  }

  ngOnInit() {
    this.artistsService.getNewest(3)
      .subscribe(data => {
        this.artists = data.result;
      });

    for (let i = 0; i < 5; i++) {
      this.imagesCount[i] = 10 + i;
    }
  }
}
