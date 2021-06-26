import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {EmptyComponent} from "./core/empty.component";
import {CommonModule} from "@angular/common";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "../app-init";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {PermissionService} from "./data/services/permission.service";
import {ToastrModule, ToastrService} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    CommonModule,
    SharedModule,
    KeycloakAngularModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService, {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }, PermissionService],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {

}
