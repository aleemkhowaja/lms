import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  @Output() searchTermChanged$: EventEmitter<string>;

  constructor() {
    this.searchTermChanged$ = new EventEmitter<string>();
  }

  ngOnInit() {
    this.searchTerm = "";
  }

  updateSearchTerm(): void {
    this.searchTermChanged$.emit(this.searchTerm);
  }

}
