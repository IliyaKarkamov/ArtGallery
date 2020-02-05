import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GalleriesService} from '../../../../services/galleries/galleries.service';

@Component({
  selector: 'app-galleries-add',
  templateUrl: './galleries-add.component.html',
  styleUrls: ['./galleries-add.component.scss']
})
export class GalleriesAddComponent implements OnInit {
  private form: FormGroup;

  private errorMessage = '';
  private isAddedSuccessfully = false;

  constructor(private formBuilder: FormBuilder, private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      longitude: [''],
      latitude: [''],
      description: [''],
      active: ['']
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.galleriesService.add(this.form.value)
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
