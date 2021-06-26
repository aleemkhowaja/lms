import {Component,OnInit,} from '@angular/core';
import {Router} from "@angular/router";
import {NavigationService} from "./data/services/navigation.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private router: Router, public navService: NavigationService) {
        this.navService.getAllLinksByEmployeeNID();
    }


  ngOnInit(): void {
      this.router.navigateByUrl("pilot")
  }

}
