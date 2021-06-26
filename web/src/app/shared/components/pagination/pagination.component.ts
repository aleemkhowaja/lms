import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() listSize: number;

  @Input() page: number;
  @Output() pageChange = new EventEmitter<number>();

  @Input() pageSize: number;
  @Output() pageSizeChange = new EventEmitter<number>();

  @Input() emptyListMessage: string;

  maxSize: number;

  constructor() {
  }

  ngOnInit() {
    this.maxSize = 5;
  }

  pageChanged(): void {
    this.pageChange.emit(this.page);
  }

  pageSizeChanged(): void {
    this.pageSizeChange.emit(this.pageSize);
  }

}
