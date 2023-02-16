import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListComponent } from './filter-list/filter-list.component';



@NgModule({
  declarations: [FilterListComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterListComponent]
})
export class FilterListModule { }
