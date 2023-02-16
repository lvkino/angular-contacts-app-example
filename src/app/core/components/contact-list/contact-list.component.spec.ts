import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { Contact } from '@app/core/models';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  const event = new MouseEvent('click');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should call show.emit when showDetails calls', () => {
    spyOn(component.show, 'emit');
    const contact: Contact = {
      id: 1,
      avatar: 'test',
      first_name: 'test',
      last_name: 'test',
      email: 'test@avatsaev.com'
    };
    component.showDetails(contact);
    expect(component.show.emit).toHaveBeenCalledWith(contact);
  });

  it('should call edit.emit when editContact calls', () => {
    spyOn(component.edit, 'emit');
    const contact: Contact = {
      id: 1,
      avatar: 'test',
      first_name: 'test',
      last_name: 'test',
      email: 'test@avatsaev.com'
    };
    component.editContact(contact);
    expect(component.edit.emit).toHaveBeenCalledWith(contact);
  });

  it('should call remove.emit when deleteContact calls', () => {
    spyOn(component.remove, 'emit');
    const contact: Contact = {
      id: 1,
      avatar: 'test',
      first_name: 'test',
      last_name: 'test',
      email: 'test@avatsaev.com',
    };
    component.deleteContact(contact);
    expect(component.remove.emit).toHaveBeenCalledWith(contact);
  });

  describe('When changePage calls', () => {

    beforeEach(() => {
      spyOn(component.page, 'emit');
      component.pagination = {
        page: 1,
        per_page: 6,
        total_pages: 2
      };
    });

    it('should call page.emit when another page is available', () => {
      component.changePage(event, 2);
      expect(component.page.emit).toHaveBeenCalledWith(2);
    });

    it('should not call page.emit when another page is not available', () => {
      component.changePage(event, 3);
      expect(component.page.emit).not.toHaveBeenCalled();
    });

    it('should not call page.emit when the page is less than 1', () => {
      component.changePage(event, 0);
      expect(component.page.emit).not.toHaveBeenCalled();
    });

  });

});

