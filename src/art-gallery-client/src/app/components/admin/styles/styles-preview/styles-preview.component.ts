import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StylesService} from '../../../../services/styles/styles.service';
import {Style} from '../../../../models/style';

@Component({
  selector: 'app-styles-preview',
  templateUrl: './styles-preview.component.html',
  styleUrls: ['./styles-preview.component.scss']
})
export class StylesPreviewComponent implements OnInit {
  style: Style = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private stylesService: StylesService) {
  }

  ngOnInit() {
    const styleId = +this.route.snapshot.paramMap.get('id');

    this.stylesService.get(styleId)
      .subscribe(data => {
        this.style = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
