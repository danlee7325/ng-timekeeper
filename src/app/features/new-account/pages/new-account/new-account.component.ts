import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  constructor(private router: Router) { }


  createAccountFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required]),
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    const canSubmit = !this.createAccountFormGroup.get('emailFormControl')?.hasError('email') &&
      !this.createAccountFormGroup.get('emailFormControl')?.hasError('required') &&
      !this.createAccountFormGroup.get('passwordFormControl')?.hasError('required') &&
      !this.createAccountFormGroup.get('nameFormControl')?.hasError('required');

    if (canSubmit) {      
      this.router.navigate(['/login']);
    }
  }
}
