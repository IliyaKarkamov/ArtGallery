import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErasService} from '../../../../services/eras/eras.service';

@Component({
  selector: 'app-eras-add',
  templateUrl: './eras-add.component.html',
  styleUrls: ['./eras-add.component.scss']
})
export class ErasAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  constructor(private formBuilder: FormBuilder, private erasService: ErasService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      active: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.erasService.add(this.form.value)
      .subscribe(data => {
        this.isAddedSuccessfully = data.result != null;
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  onReset() {
    this.form.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }
}
