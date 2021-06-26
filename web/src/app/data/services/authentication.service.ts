import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakService} from "keycloak-angular";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _http: HttpClient, private keycloakService: KeycloakService) {
  }

  //GET
  getResource(resourceUrl): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.keycloakService.getToken()
    });
    return this._http.get(resourceUrl, {headers});
  }

  //POST
  postResource(resourceUrl, obj: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.keycloakService.getToken()
    });
    return this._http.post(resourceUrl, obj, {headers});
  }

  //PUT
  putResource(resourceUrl, obj: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.keycloakService.getToken()
    });
    return this._http.put(resourceUrl, obj, {headers});
  }

  logout() {
    this.keycloakService.logout(environment.redirectUrl);
  }

}
