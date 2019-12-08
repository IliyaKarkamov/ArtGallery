import {Component, OnInit} from '@angular/core';

import {Account} from '../../../models/account';

@Component({
  selector: 'app-account-sign-up',
  templateUrl: './account-sign-up.component.html',
  styleUrls: ['./account-sign-up.component.scss']
})
export class AccountSignUpComponent implements OnInit {
  isPasswordVisible = false;

  account: Account = new Account();

  constructor() {
  }

  ngOnInit() {
  }

  togglePasswordFieldVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  getPasswordFieldType() {
    return this.isPasswordVisible ? 'text' : 'password';
  }
}
