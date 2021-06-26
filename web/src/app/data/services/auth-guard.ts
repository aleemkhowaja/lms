import {CanActivate, Route} from '@angular/router';
import {Injectable} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  private nav = [];
  private hasPermission = false;

  constructor(private navService: NavigationService) {
  }

  //todo make sure permission sys is working well. I just done proof-of-concept!!
  canActivate(route, state): boolean {
    this.navService.menuItems$
      .subscribe((items) => {
        this.nav = items;
        this.hasPermissionToAccessThisPage(state.url);

      });

    return this.hasPermission;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    this.navService.menuItems$
      .subscribe((items) => {
        this.nav = items;
        this.hasPermissionToAccessThisPage('/pilot/' + route.path);

      });
    return this.hasPermission;
  }

  hasPermissionToAccessThisPage(url) {
    for (let index = 0; index < this.nav.length; index++) {
      if (url === this.nav[index].state) {
        this.hasPermission = true;
      }
    }
  }
}
