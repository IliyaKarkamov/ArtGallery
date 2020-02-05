import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../models/account';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../../../services/account/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {
  private registerForm: FormGroup;

  private account: Account = null;

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private accountService: AccountService) {
  }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.accountService.get(userId)
      .subscribe(data => {
        this.account = data.result;
        this.createForm();
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.accountService.edit(this.account.id, this.registerForm.value)
      .subscribe(data => {
        this.isEditedSuccessfully = data.result;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  onReset() {
    this.registerForm.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      id: [this.account.id, Validators.required],
      firstName: [this.account.firstName, Validators.required],
      secondName: [this.account.secondName],
      lastName: [this.account.lastName, Validators.required],
      username: [this.account.username, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [this.account.email, [Validators.required, Validators.email]],
      isActive: [this.account.isActive],
      isAdmin: [this.account.isAdmin]
    });
  }
}
