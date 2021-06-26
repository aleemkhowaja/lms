import {Component, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarDirective} from "ngx-perfect-scrollbar";
import {NavigationService} from "../../data/services/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild(PerfectScrollbarDirective, {static: true}) perfectScrollbar: PerfectScrollbarDirective;

  constructor(
      public navService: NavigationService,private router: Router) {}

  ngOnInit() {

  }

}
