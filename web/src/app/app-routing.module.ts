import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyComponent} from "./core/empty.component";
import {BaseComponent} from "./layout/base/base.component";
import {AuthGuard} from "./data/services/auth-guard";

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]

  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pilot',
    pathMatch: 'full'
  },
  {
    path: 'pilot',
    component: BaseComponent,
    children: pagesRoutes
  },
  {
    path: '**',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
