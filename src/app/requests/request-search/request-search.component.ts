import { Component, Input, ViewChild, OnInit, ElementRef, Output, EventEmitter } from "@angular/core";
import { fromEvent } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'requests-search',
  templateUrl: './request-search.component.html'
})
export class RequestsSearchComponent implements OnInit {
  @Input() labelString: string = "Search";
  @Output() searchResult = new EventEmitter();
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.initSearchInput();
  }

  initSearchInput(): void {
     fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      map(({target}) => target.value)
    ).subscribe(value => this.searchResult.emit(value));
  };
}