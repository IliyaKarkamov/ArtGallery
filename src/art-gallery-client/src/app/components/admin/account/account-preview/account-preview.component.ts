import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Account} from '../../../../models/account';
import {AccountService} from '../../../../services/account/account.service';

@Component({
  selector: 'app-account-preview',
  templateUrl: './account-preview.component.html',
  styleUrls: ['./account-preview.component.scss']
})
export class AccountPreviewComponent implements OnInit {
  account: Account = null;
  loadingErrorMessage = '';

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.accountService.get(userId)
      .subscribe(data => {
        this.account = data.result;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }
}
