import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    username : '',
    password : '',
    admin : false
  };

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          } else if (err.status === 500) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
