import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerButton = 'REGISTER';
  public registerForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor( private translate: TranslateService,
               private authenticationService: AuthenticationService,
               private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      this.authenticationService.onRegister(this.registerForm.value).subscribe(data => {
        this.router.navigate([`auth`]);
      });
    } else {
      console.log('password and confirm password does not match');
    }
  }

}