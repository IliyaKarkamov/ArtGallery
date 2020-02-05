import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ErasService} from '../../../../services/eras/eras.service';
import {Era} from '../../../../models/era';

@Component({
  selector: 'app-eras-edit',
  templateUrl: './eras-edit.component.html',
  styleUrls: ['./eras-edit.component.scss']
})
export class ErasEditComponent implements OnInit {
  private form: FormGroup;

  private era: Era = null;

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private erasService: ErasService) {
  }

  ngOnInit() {
    const eraId = +this.route.snapshot.paramMap.get('id');

    this.erasService.get(eraId)
      .subscribe(data => {
        this.era = data.result;
        this.createForm();
      }, error => {
        this.errorMessage = '';

        for (const exception of error.error.exceptions) {
          this.errorMessage += exception.message;
        }
      });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.erasService.edit(this.era.id, this.form.value)
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
    this.form.reset();

    Object.keys(this.f).forEach(key => {
      this.f[key].setErrors(null);
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: [this.era.name, Validators.required],
      description: [this.era.description],
      active: [this.era.active],
    });
  }
}
