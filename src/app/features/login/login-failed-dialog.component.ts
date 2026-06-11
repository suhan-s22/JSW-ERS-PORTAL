import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-failed-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Login Failed</h2>
    <mat-dialog-content>
      <p>Please verify all required fields and captcha.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" (click)="close()">OK</button>
    </mat-dialog-actions>
  `,
  styles: `
    h2 {
      color: var(--primary);
      font-size: 20px;
      margin: 0;
    }

    p {
      margin: 0;
      color: #555;
      font-size: 14px;
      line-height: 1.5;
    }

    mat-dialog-actions {
      padding: 8px 24px 16px;
    }
  `,
})
export class LoginFailedDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<LoginFailedDialogComponent>);

  close(): void {
    this.dialogRef.close();
  }
}
