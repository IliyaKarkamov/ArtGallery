import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtistsService} from '../../../../services/artists/artists.service';
import {Artist} from '../../../../models/artist';

@Component({
  selector: 'app-artists-preview',
  templateUrl: './artists-preview.component.html',
  styleUrls: ['./artists-preview.component.scss']
})
export class ArtistsPreviewComponent implements OnInit {
  artist: Artist = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) {
  }

  ngOnInit() {
    const artistId = +this.route.snapshot.paramMap.get('id');

    this.artistsService.get(artistId)
      .subscribe(data => {
        this.artist = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
