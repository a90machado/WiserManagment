import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _userTypeUrl = 'http://localhost:3000/api/usertype?userid=';

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user)  {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserType() {
    return this.http.get<any>(this._userTypeUrl + localStorage.getItem('userid'));
  }

}


