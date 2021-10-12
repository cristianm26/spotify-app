import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;
  constructor(
    private _authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  ngOnInit(): void { }
  sendLogin() {
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password)
      .subscribe(
        (
          responseOk // Cuando el usuario ingresa sus credenciales Correctas
        ) => {
          const { tokenSession, data } = responseOk;
          this.cookieService.set('token', tokenSession, 4, '/');
          this.router.navigate(['/', 'tracks'])
        },
        (error) => {
          this.errorSession = true;
          console.log(error);
        }
      );
  }
}
