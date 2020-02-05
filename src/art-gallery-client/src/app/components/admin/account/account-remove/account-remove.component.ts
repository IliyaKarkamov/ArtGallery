import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../../../services/account/account.service';

@Component({
  selector: 'app-account-remove',
  templateUrl: './account-remove.component.html',
  styleUrls: ['./account-remove.component.scss']
})
export class AccountRemoveComponent implements OnInit {
  private errorMessage = '';
  private isRemovedSuccessfully = false;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.accountService.remove(userId)
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
