import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {mustMatch} from '../../../validators/must-match';
import {AccountService} from '../../../services/account/account.service';

@Component({
  selector: 'app-account-sign-up',
  templateUrl: './account-sign-up.component.html',
  styleUrls: ['./account-sign-up.component.scss']
})
export class AccountSignUpComponent implements OnInit {
  registerForm: FormGroup;

  isPasswordVisible = false;
  isConfirmPasswordVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]]
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  togglePasswordFieldVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  getPasswordFieldType() {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  toggleConfirmPasswordFieldVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  getConfirmPasswordFieldType() {
    return this.isConfirmPasswordVisible ? 'text' : 'password';
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.accountService.create(this.registerForm.value)
      .subscribe(data => {
        console.log('success');
        this.router.navigate(['account/login']);
      }, error => {
        console.log('greshka.' + error);
      });
  }

  onReset() {
    this.registerForm.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }
}
