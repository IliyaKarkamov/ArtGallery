import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/account/authentication.service';

@Component({
  selector: 'app-account-sign-in',
  templateUrl: './account-sign-in.component.html',
  styleUrls: ['./account-sign-in.component.scss']
})
export class AccountSignInComponent implements OnInit {
  private registerForm: FormGroup;

  private isSignedInSuccessfully = false;
  private signingErrorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authenticationService.authenticate(this.registerForm.value)
      .subscribe(data => {
        this.isSignedInSuccessfully = true;
      }, error => {
        this.signingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.signingErrorMessage += exception.message;
        }
      });
  }

  onReset() {
    this.isSignedInSuccessfully = false;
    this.signingErrorMessage = '';

    this.registerForm.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }
}
