import {ErrorHandler, Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {
  constructor(private _authService: AuthenticationService, private _router: Router) {

  }

  handleError(error: HttpErrorResponse): void {
    if (error.status === 401 || error.status === 403) {
      this._authService.logout();
    }

  }
}
