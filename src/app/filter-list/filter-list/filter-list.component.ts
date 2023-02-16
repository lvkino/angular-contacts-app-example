import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
