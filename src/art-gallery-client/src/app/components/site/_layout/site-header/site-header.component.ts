import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../services/account/authentication.service';
import {GalleriesService} from '../../../../services/galleries/galleries.service';
import {Gallery} from '../../../../models/gallery';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  private galleries: Gallery[];

  constructor(private authenticationService: AuthenticationService, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
  }

  OnClick() {
    this.galleriesService.getAllActive()
      .subscribe(data => {
        this.galleries = data.result;
      });
  }
}
