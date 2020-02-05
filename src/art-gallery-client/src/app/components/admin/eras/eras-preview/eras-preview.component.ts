import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ErasService} from '../../../../services/eras/eras.service';
import {Era} from '../../../../models/era';

@Component({
  selector: 'app-eras-preview',
  templateUrl: './eras-preview.component.html',
  styleUrls: ['./eras-preview.component.scss']
})
export class ErasPreviewComponent implements OnInit {
  eras: Era = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private erasService: ErasService) {
  }

  ngOnInit() {
    const eraId = +this.route.snapshot.paramMap.get('id');

    this.erasService.get(eraId)
      .subscribe(data => {
        this.eras = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
