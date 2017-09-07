import { Injectable } from '@angular/core';
import {
  Http, RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';

@Injectable()
export class LoginService {

  private url: string = 'http://localhost:8000/auth/';

  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();


  constructor(private http: Http, private router: Router, private opt: RequestOptions) {
  }

  login(usuario: User) {

    let options = new RequestOptions();
    options.withCredentials = true;

    return this.http
      .post(this.url + 'login', JSON.stringify(usuario), options)
      .map((res) => {
        var token = res.headers.get('x-access-token');
        
        if (token || res.json()) {
          
          this._loggedIn.next(true);
          localStorage.setItem('token', token);
          
          if (res.json()) {
            localStorage.setItem('username', res.json().name);
            localStorage.setItem('email', res.json().email);
            this.router.navigate(['/home']);
          }
        } else {
          return res.json();
        }
      }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  logout() {
    localStorage.clear();
    this._loggedIn.next(false);
    this.router.navigate(['']);

  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token) {
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return this._loggedIn.getValue();
  }

}