import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  explicitError = false;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    if (this.explicitError) {
      return true;
    }

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  setError(value: boolean): void {
    this.explicitError = value;
  }
}
