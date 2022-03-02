import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;

  constructor(private loginService: LoginService, public router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.loginService.login(user).subscribe(
      data => {
        this.loginService.setToken(data.token);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
      });
  }
  ngOnInit(): void {}
}
