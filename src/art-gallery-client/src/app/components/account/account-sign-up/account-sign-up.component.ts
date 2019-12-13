import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {mustMatch} from '../../../utils/must-match';
import {AccountService} from '../../../services/account/account.service';
import {CustomErrorStateMatcher} from '../../../utils/custom-error-state-matcher';

@Component({
  selector: 'app-account-sign-up',
  templateUrl: './account-sign-up.component.html',
  styleUrls: ['./account-sign-up.component.scss']
})
export class AccountSignUpComponent implements OnInit {
  private registerForm: FormGroup;

  private isPasswordVisible = false;
  private isConfirmPasswordVisible = false;

  private isUsernameSpinnerVisible = false;
  private isUsernameAvailable = false;
  private isUsernameChecked = false;
  private lastEnteredUsername: string;
  private timeoutHandleUsername: number;
  private matcherUsername = new CustomErrorStateMatcher();

  private isEmailSpinnerVisible = false;
  private isEmailAvailable = false;
  private isEmailChecked = false;
  private lastEnteredEmail: string;
  private timeoutHandleEmail: number;
  private matcherEmail = new CustomErrorStateMatcher();

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

    if (this.isUsernameSpinnerVisible || this.isEmailSpinnerVisible) {
      return;
    }

    this.accountService.create(this.registerForm.value)
      .subscribe(data => {
        this.router.navigate(['account/signin']);
      }, error => {
        console.log(error);
      });
  }

  onReset() {
    window.clearTimeout(this.timeoutHandleUsername);
    window.clearTimeout(this.timeoutHandleEmail);

    this.isUsernameChecked = false;
    this.isUsernameSpinnerVisible = false;
    this.matcherUsername.setError(false);

    this.isEmailChecked = false;
    this.isEmailSpinnerVisible = false;
    this.matcherEmail.setError(false);

    this.registerForm.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }

  canCheckUsername(): boolean {
    const value = this.f.username.value.toString().trim();
    return !(this.f.username.errors != null || value.length === 0 || this.lastEnteredUsername === value);
  }

  checkUsername() {
    window.clearTimeout(this.timeoutHandleUsername);

    this.isUsernameChecked = false;
    this.matcherUsername.setError(false);

    if (this.canCheckUsername()) {
      this.isUsernameSpinnerVisible = true;

      this.timeoutHandleUsername = setTimeout(() => {
        if (this.canCheckUsername()) {
          this.lastEnteredUsername = this.f.username.value;

          this.accountService.checkUsername(this.f.username.value)
            .subscribe(data => {
              this.isUsernameAvailable = !data.result;
              this.isUsernameSpinnerVisible = false;
              this.isUsernameChecked = true;
              this.matcherUsername.setError(data.result);
            }, error => {
              console.error(error);
              this.isUsernameSpinnerVisible = false;
              this.isUsernameChecked = true;
              this.matcherUsername.setError(true);
            });
        } else {
          window.clearTimeout(this.timeoutHandleUsername);
        }
      }, 2000);
    } else {
      this.isUsernameSpinnerVisible = false;

      const value = this.f.username.value.toString().trim();

      if (this.lastEnteredUsername === value) {
        this.isUsernameChecked = true;
        this.matcherUsername.setError(!this.isUsernameAvailable);
      }
    }
  }

  canCheckEmail(): boolean {
    const value = this.f.email.value.toString().trim();
    return !(this.f.email.errors != null || value.length === 0 || this.lastEnteredEmail === value);
  }

  checkEmail() {
    window.clearTimeout(this.timeoutHandleEmail);

    this.isEmailChecked = false;
    this.matcherEmail.setError(false);

    if (this.canCheckEmail()) {
      this.isEmailSpinnerVisible = true;

      this.timeoutHandleEmail = setTimeout(() => {
        if (this.canCheckEmail()) {
          this.lastEnteredEmail = this.f.email.value;

          this.accountService.checkEmail(this.f.email.value)
            .subscribe(data => {
              this.isEmailAvailable = !data.result;
              this.isEmailSpinnerVisible = false;
              this.isEmailChecked = true;
              this.matcherEmail.setError(data.result);
            }, error => {
              console.error(error);
              this.isEmailSpinnerVisible = false;
              this.isEmailChecked = true;
              this.matcherEmail.setError(true);
            });
        } else {
          window.clearTimeout(this.timeoutHandleEmail);
        }
      }, 2000);
    } else {
      this.isEmailSpinnerVisible = false;

      const value = this.f.email.value.toString().trim();

      if (this.lastEnteredEmail === value) {
        this.isEmailChecked = true;
        this.matcherEmail.setError(!this.isEmailAvailable);
      }
    }
  }
}
