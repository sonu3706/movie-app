import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  onRegister(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register', user, httpOptions);
  }

  onLogin(user: any): Observable<any> {
   // const data = [{email: userName, userPassword: password}];
    return this.http.post('http://localhost:8080/auth/login', user, httpOptions);

  }
}
