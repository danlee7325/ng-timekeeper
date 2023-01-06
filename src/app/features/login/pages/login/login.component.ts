import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }


  loginFormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    const canSubmit = !this.loginFormGroup.get('emailFormControl')?.hasError('email') &&
      !this.loginFormGroup.get('emailFormControl')?.hasError('required') &&
      !this.loginFormGroup.get('passwordFormControl')?.hasError('required');

    if (canSubmit) {
      this.authService.isAuthenticated = true;
      
      this.router.navigate(['main']);
    }
  }
}
