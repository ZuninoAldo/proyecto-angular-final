import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

loginForm: FormGroup;

constructor(
  private fb: FormBuilder,
  private router: Router,
  private AuthService: AuthService,) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
}

submit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;

    const isLoggedIn = this.AuthService.login(email, password);
    if (!isLoggedIn) {
      alert('Usuario o contraseña incorrectos');
      return;
    }

    this.router.navigate(['/dashboard']);
  } 
}

}
