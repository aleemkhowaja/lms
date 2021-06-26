import {Component, HostListener, OnInit} from '@angular/core';
import {IMenuItem, NavigationService} from "../../data/services/navigation.service";
import {NavigationEnd, Router} from "@angular/router";
import {Utils} from "../utils";
import {filter} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //todo add var to save the child of dropdown list and check if selected or not!!

  selectedItem: IMenuItem;

  nav: IMenuItem[];
  logo: string = environment.deployUrl + "/assets/images/logo.png";

  constructor(
    public router: Router,
    public navService: NavigationService
  ) {
  }

  ngOnInit() {
    this.updateSidebar();
    // CLOSE SIDENAV ON ROUTE CHANGE
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((routeChange) => {
        this.closeChildNav();
        if (Utils.isMobile()) {
          this.navService.sidebarState.sideNavOpen = false;
        }
      });

    this.navService.menuItems$
      .subscribe((items) => {
        this.nav = items;
        this.setActiveFlag();
      });
  }

  selectItem(item) {
    this.navService.sidebarState.childNavOpen = true;
    this.selectedItem = item;
    this.setActiveMainItem(item);
  }

  closeChildNav() {
    this.navService.sidebarState.childNavOpen = false;
    this.setActiveFlag();
  }

  onClickChangeActiveFlag(item) {
    this.setActiveMainItem(item);
  }

  setActiveMainItem(item) {
    this.nav.forEach(item => {
      item.active = false;
    });
    item.active = true;
  }

  setActiveFlag() {
    if (window && window.location) {
      const activeRoute = window.location.hash || window.location.pathname;
      this.nav.forEach(item => {
        item.active = false;
        if (activeRoute.indexOf(item.state) !== -1) {
          this.selectedItem = item;
          item.active = true;
        }
        if (item.sub) {
          item.sub.forEach(subItem => {
            subItem.active = false;
            if (activeRoute.indexOf(subItem.state) !== -1) {
              this.selectedItem = item;
              item.active = true;
            }
            if (subItem.sub) {
              subItem.sub.forEach(subChildItem => {
                if (activeRoute.indexOf(subChildItem.state) !== -1) {
                  this.selectedItem = item;
                  item.active = true;
                  subItem.active = true;
                }
              });
            }
          });
        }
      });
    }
  }

  updateSidebar() {
    if (Utils.isMobile()) {
      this.navService.sidebarState.sideNavOpen = false;
      this.navService.sidebarState.childNavOpen = false;
    } else {
      this.navService.sidebarState.sideNavOpen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateSidebar();
  }


}
