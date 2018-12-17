import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userType: boolean;

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this._authService.getUserType()
      .subscribe(
        res => {this.userType = res.admin; },
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

  logoutUser() {
    return this._authService.logoutUser();
  }

}
