import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../../features/auth/store/auth.actions';
import * as AuthSelectors from '../../../features/auth/store/auth.selectors';
import { AppStateInterface } from '../../../core/models/app-state.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store<AppStateInterface>, private readonly router: Router) {}

  ngOnInit() {
    this.store.select(AuthSelectors.signUpUserSelector).subscribe((signUpUser) => {
        if (signUpUser) {
          this.router.navigate(['/login']);
        }
      });
    this.signUpForm = this.fb.group({
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*')])],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-ZığüşöçİĞÜŞÖÇ]*')])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('^\\d{11}'), Validators.minLength(11), Validators.maxLength(11)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        confirmPassword: ['', Validators.required],
      }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatchedPasswords: true };
  }

  onSubmit() {
    if (this.signUpForm.invalid) return;    

    const firstName = this.signUpForm.get('firstName')?.value;
    const lastName = this.signUpForm.get('lastName')?.value;
    const phoneNumber = this.signUpForm.get('phoneNumber')?.value;
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;

    this.store.dispatch(
      AuthActions.signUp({ firstName, lastName, email, phoneNumber, password })
    );
  }

  formatPhoneNumber() {
    let phoneNumber = this.signUpForm.get('phoneNumber')?.value;
    phoneNumber = String(phoneNumber);
    phoneNumber = phoneNumber.replace(/\D/g, '');
    if (phoneNumber.length > 0 && phoneNumber[0] !== '0') {
      phoneNumber = '0' + phoneNumber;
    }
    this.signUpForm.get('phoneNumber')?.setValue(phoneNumber);
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  getErrorMessage(controlName: string): string {
    const control = this.signUpForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) return `* ${controlName} is required`;
      if (control.errors['minlength']) return `* ${controlName} must be at least ${control.errors['minlength'].requiredLength} characters`;
      if (control.errors['maxlength']) return `* ${controlName} must be at most ${control.errors['maxlength'].requiredLength} characters`;
      if (control.errors['pattern']) return `* ${controlName} must contain only letters`;
      if (control.errors['email']) return '* Email is invalid';
    }
    return '';
  }

  get confirmPasswordError(): string {
    const confirmPasswordControl = this.signUpForm.get('confirmPassword');
    if (confirmPasswordControl?.errors?.['required']) return '* Confirm password is required';
    if (confirmPasswordControl?.value !== this.signUpForm.get('password')?.value) return '* Passwords do not match';
    return '';
  }
}
