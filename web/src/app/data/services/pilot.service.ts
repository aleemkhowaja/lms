import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from "../../../environments/environment";


@Injectable({providedIn: 'root'})
export class PilotService {
  applicationUrl: string;

  constructor(private authService: AuthenticationService) {
    this.applicationUrl = environment.apiURL + '';
  }

  public loadUserDetail(): Observable<any> {
    return this.authService.getResource(this.applicationUrl + '/loadUserDetail');
  }


}
