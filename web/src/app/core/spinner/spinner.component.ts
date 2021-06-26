import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/data/services/loader.service';
import { LoaderState } from 'src/app/data/model/loaderState';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  show = false;

  private subscription: Subscription;
  logo: string = environment.deployUrl +"/assets/images/logo.png";

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
