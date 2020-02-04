import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../services/account/authentication.service';

@Component({
  selector: 'app-account-sign-out',
  templateUrl: './account-sign-out.component.html',
  styleUrls: ['./account-sign-out.component.scss']
})
export class AccountSignOutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {
    authenticationService.signOut();
  }

  ngOnInit() {
  }
}
