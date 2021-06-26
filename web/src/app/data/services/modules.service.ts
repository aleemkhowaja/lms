import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class ModulesService {

  constructor(private _http: HttpClient) {
  }

  modulesSysURL = environment.modulesSysURL;

  getSystems() {
    return this._http.get(`${this.modulesSysURL}/systems`);
  }
}
