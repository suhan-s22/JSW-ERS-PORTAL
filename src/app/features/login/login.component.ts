import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { LoginFailedDialogComponent } from './login-failed-dialog.component';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  readonly showPassword = signal(false);
  readonly captchaCode = signal(this.generateCaptcha());

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    captchaInput: ['', [Validators.required, this.captchaMatchValidator.bind(this)]],
    rememberMe: [false, Validators.requiredTrue],
    agreeContinue: [false, Validators.requiredTrue],
  });

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  getCaptchaError(): string {
    const control = this.form.get('captchaInput');
    if (!control?.errors) {
      return '';
    }
    if (control.errors['required']) {
      return 'Captcha is required.';
    }
    if (control.errors['captchaMismatch']) {
      return 'Captcha does not match.';
    }
    return 'Captcha is invalid.';
  }

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  refreshCaptcha(): void {
    this.captchaCode.set(this.generateCaptcha());
    this.form.get('captchaInput')?.updateValueAndValidity();
  }

  onLogin(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.dialog.open(LoginFailedDialogComponent, {
        width: '400px',
        autoFocus: true,
      });
      return;
    }

    this.authService.login();
    this.router.navigate(['/form']);
  }

  private captchaMatchValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string)?.trim() ?? '';
    if (!value) {
      return null;
    }
    return value === this.captchaCode() ? null : { captchaMismatch: true };
  }

  private generateCaptcha(): string {
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += CAPTCHA_CHARS.charAt(Math.floor(Math.random() * CAPTCHA_CHARS.length));
    }
    return result;
  }
}
