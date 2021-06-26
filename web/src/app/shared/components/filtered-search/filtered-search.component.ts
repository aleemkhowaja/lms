import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {SearchFilter} from "../../../data/model/SearchFilter";

@Component({
  selector: 'app-filtered-search',
  templateUrl: './filtered-search.component.html',
  styleUrls: ['./filtered-search.component.scss']
})
export class FilteredSearchComponent implements OnInit {

  @Input() filters: SearchFilter[];
  searchTerm: string;
  @Output() searchTermChanged$: EventEmitter<string>;
  selectedFilters: SearchFilter[];
  @Output() selectedFiltersChanged$: EventEmitter<SearchFilter[]>;

  dropdownSettings: IDropdownSettings;
  @Input()  isDisabled: boolean = false;

  constructor() {
    this.selectedFiltersChanged$ = new EventEmitter<SearchFilter[]>();
    this.searchTermChanged$ = new EventEmitter<string>();
  }

  ngOnInit() {
    this.searchTerm = "";
    this.selectedFilters = this.filters;
    this.dropdownSettings = {
      singleSelection: false,
      idField: "attributeName",
      textField: "placeholder",
      selectAllText: "تحديد الكل",
      unSelectAllText: "إلغاء تحديد الكل",
      noDataAvailablePlaceholderText: "لا يوجد بيانات",
      itemsShowLimit: 0,
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }

  updateSelectedFilters(): void {
    this.selectedFiltersChanged$.emit(this.selectedFilters);
    // this.searchTermChanged.emit(this.searchTerm);
  }

  updateSearchTerm(): void {
    this.searchTermChanged$.emit(this.searchTerm);
  }

}
