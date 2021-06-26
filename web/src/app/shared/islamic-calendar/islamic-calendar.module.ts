import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdDatepickerIslamicumalqura} from './islamic-calendar.component';
// import {MatIconModule} from "@angular/material/icon";


@NgModule({
    imports: [FormsModule, NgbModule,
      // MatIconModule
    ],
  declarations: [NgbdDatepickerIslamicumalqura],
  exports: [NgbdDatepickerIslamicumalqura],
  bootstrap: [NgbdDatepickerIslamicumalqura],
})
export class NgbdDatepickerIslamicUmalquraModule {}
