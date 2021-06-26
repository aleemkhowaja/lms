import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgbCollapseModule, NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {BaseComponent} from "./base/base.component";
import {NgModule} from "@angular/core";
import {CoreModule} from "../core/core.module";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NotificationComponent} from "./notification/notification.component";
import {DropdownAnchorDirective} from "./directives/dropdown-anchor.directive";
import {DropdownLinkDirective} from "./directives/dropdown-link.directive";
import {AppDropdownDirective} from "./directives/dropdown.directive";
import {ScrollToDirective} from "./directives/scroll-to.directive";
import {
  SidebarContainerDirective,
  SidebarContentDirective,
  SidebarDirective,
  SidebarTogglerDirective
} from "./directives/sidebar.directive";
import {HighlightjsDirective} from "./directives/highlightjs.directive";
import {FullScreenWindowDirective} from "./directives/full-screen.directive";
import {ToastrModule, ToastrService} from "ngx-toastr";

const directives = [
  DropdownAnchorDirective,
  DropdownLinkDirective,
  AppDropdownDirective,
  ScrollToDirective,
  SidebarDirective,
  SidebarContainerDirective,
  SidebarContentDirective,
  SidebarTogglerDirective,
  HighlightjsDirective,
  FullScreenWindowDirective
];


@NgModule({
  declarations: [BaseComponent, SidebarComponent, HeaderComponent, FooterComponent, NotificationComponent, directives],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PerfectScrollbarModule,
    CoreModule,
    NgbModule,
    ToastrModule.forRoot(),


  ],
  exports: [directives],
  providers: [ToastrService]
})
export class LayoutModule {
}
