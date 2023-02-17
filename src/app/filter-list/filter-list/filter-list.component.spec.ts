import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from '@app/core/models';

import { FilterListComponent } from './filter-list.component';

export class TestObject {

}

describe('FilterListComponent', () => {
  let component: FilterListComponent<any>;
  let fixture: ComponentFixture<FilterListComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
