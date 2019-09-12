import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginButton = 'LOGIN';
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    console.log('login loded');
  }

  login() {
    console.log('login');
    this.authenticationService.onLogin(this.loginForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate([`home`]);
      });
  }
}
