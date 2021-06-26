import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {OAuthService} from "angular-oauth2-oidc";
import {AuthGuard} from "../data/services/auth-guard";

import {CommonModule} from "@angular/common";
import {InterceptorService} from "../data/services/interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [NotFoundComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }]
})
export class CoreModule {

}
