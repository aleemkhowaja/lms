import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from "../../../environments/environment";


@Injectable({providedIn: 'root'})
export class PermissionService {
  applicationUrl: string;

  constructor(private authService: AuthenticationService) {
    this.applicationUrl = environment.apiURL + '/permission';
  }

  public getAllLinksByEmployeeNID(): Observable<any> {
    return this.authService.getResource(this.applicationUrl + '/getAllLinksByEmployeeNID');
  }


}
