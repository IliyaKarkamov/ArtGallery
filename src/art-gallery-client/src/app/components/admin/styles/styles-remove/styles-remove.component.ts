import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StylesService} from '../../../../services/styles/styles.service';

@Component({
  selector: 'app-styles-remove',
  templateUrl: './styles-remove.component.html',
  styleUrls: ['./styles-remove.component.scss']
})
export class StylesRemoveComponent implements OnInit {
  private errorMessage = '';
  private isRemovedSuccessfully = false;

  constructor(private route: ActivatedRoute, private stylesService: StylesService) {
  }

  ngOnInit() {
    const styleId = +this.route.snapshot.paramMap.get('id');

    this.stylesService.deactivate(styleId)
      .subscribe(data => {
        this.isRemovedSuccessfully = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }
}
