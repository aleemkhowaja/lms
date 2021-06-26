import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {NavigationService} from "../../data/services/navigation.service";
import {AuthenticationService} from "../../data/services/authentication.service";
import {environment} from "../../../environments/environment";
import {Utils} from "../utils";

class appDropItem {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  @Output() headerToggleEv: EventEmitter<any>;
  notifications: any[];
  modules: any[];
  currentState;

  prodApps: appDropItem[];
  testApps: appDropItem[];
  logoSrc: string = environment.deployUrl + "/assets/images/SFD_LOGOTYPE_H_RGB_DUAL_RIGHT.svg";
  avatarSrc: string = environment.deployUrl + "/assets/images/avatar.png";

  constructor(private navService: NavigationService,
              private auth: AuthenticationService) {
    this.headerToggleEv = new EventEmitter<any>();
    this.currentState = this.navService.sidebarState;
    this.notifications = [];
  }

  ngOnInit() {
    this.updateSidebar();
    this.prodApps = [
      {name: "لوحتي", url: window.location.protocol + "//" + window.location.hostname + "/mysfd", icon: "i-Bar-Chart"},
      {
        name: "أنظمتي",
        url: window.location.protocol + "//" + window.location.hostname + "/myApps",
        icon: "i-Computer-Secure"
      },
    ];
    this.testApps = [
      {name: "لوحتي", url: "http://dev-test.sfd.gov.sa:8082", icon: "i-Bar-Chart"},
      {name: "أنظمتي", url: "http://dev-test.sfd.gov.sa:8083", icon: "i-Computer-Secure"},
    ];
  }


  isMobile(): boolean {
    return Utils.isMobile();
  }

  getApplications(): appDropItem[] {
    if (environment.production) {
      return this.prodApps;
    } else {
      return this.testApps;
    }
  }

  toggleSidebar() {
    let state = this.navService.sidebarState;
    if (state.childNavOpen && state.childNavOpen) {
      state.childNavOpen = false;
      this.headerToggleEv.emit(state);
      return;
    }
    if (!state.childNavOpen && state.childNavOpen) {
      state.childNavOpen = false;
      this.headerToggleEv.emit(state);
      return;
    }
    if (!state.childNavOpen && !state.childNavOpen) {
      state.childNavOpen = true;
      // state.childnavOpen = true;
    }
    this.headerToggleEv.emit(state);
  }

  signOut() {
    this.auth.logout();
  }

  updateSidebar() {
    this.headerToggleEv.emit(this.navService.sidebarState);
  }
}
