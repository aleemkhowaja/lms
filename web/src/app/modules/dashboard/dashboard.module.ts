import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommonModule} from "@angular/common";
import {ToastrModule, ToastrService} from "ngx-toastr";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [DashboardComponent],
  providers: [ToastrService],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ToastrModule.forRoot(),

  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
