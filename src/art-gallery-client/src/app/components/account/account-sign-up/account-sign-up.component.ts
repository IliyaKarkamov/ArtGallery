import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mustMatch} from '../../../validators/must-match';

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
    private formBuilder: FormBuilder
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

    console.log(this.registerForm.value);
  }

  onReset() {
    this.registerForm.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }
}
