import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userProfile: any;

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    // loadUserProfile
    this.keycloakService.loadUserProfile().then(user => {
      this.userProfile = user;
    });

  }

}
