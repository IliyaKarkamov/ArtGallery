import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StylesService} from '../../../../services/styles/styles.service';
import {ActivatedRoute} from '@angular/router';
import {Style} from '../../../../models/style';

@Component({
  selector: 'app-styles-edit',
  templateUrl: './styles-edit.component.html',
  styleUrls: ['./styles-edit.component.scss']
})
export class StylesEditComponent implements OnInit {
  private form: FormGroup;

  private style: Style = null;

  private errorMessage = '';
  private isEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private stylesService: StylesService) {
  }

  ngOnInit() {
    const styleId = +this.route.snapshot.paramMap.get('id');

    this.stylesService.get(styleId)
      .subscribe(data => {
        this.style = data.result;
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

    this.stylesService.edit(this.style.id, this.form.value)
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
      name: [this.style.name, Validators.required],
      description: [this.style.description],
      active: [this.style.active],
    });
  }
}
