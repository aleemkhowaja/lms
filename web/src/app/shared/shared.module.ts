import {NgModule} from '@angular/core';

import {NgbdDatepickerIslamicUmalquraModule} from "./islamic-calendar/islamic-calendar.module";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {FilteredSearchComponent} from "./components/filtered-search/filtered-search.component";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {SearchComponent} from "./components/search/search.component";
import {ActionReasonPopupComponent} from "./modals/action-reason-popup/action-reason-popup.component";
import {ConfirmActionPopupComponent} from "./modals/confirm-action-popup/confirm-action-popup.component";
import {BtnLoadingComponent} from "./components/btn-loading/btn-loading.component";

@NgModule({
  declarations: [
    PaginationComponent,
    FilteredSearchComponent,
    SearchComponent,
    ActionReasonPopupComponent,
    ConfirmActionPopupComponent,
    BtnLoadingComponent,

  ],
  imports: [
    NgbdDatepickerIslamicUmalquraModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule,
    CommonModule,
    NgMultiSelectDropDownModule
  ],

  exports: [
    FilteredSearchComponent,
    PaginationComponent,
    SearchComponent,
    BtnLoadingComponent,
  ],
  entryComponents: [
    ConfirmActionPopupComponent,
    ActionReasonPopupComponent,
  ]
})
export class SharedModule {
}
