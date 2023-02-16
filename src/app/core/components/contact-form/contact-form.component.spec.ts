import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Contact } from '@app/core/models';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should call form.patchValue when ngOnChanges calls', () => {
    spyOn(component.form, 'patchValue');
    const contact: Contact = {
      id: 1,
      avatar: 'test',
      first_name: 'test',
      last_name: 'test',
      email: 'test@avatsaev.com'
    };
    component.contact = contact;
    component.ngOnChanges();
    expect(component.form.patchValue).toHaveBeenCalledWith(contact);
  });

  it('should call save.emit when submit calls', () => {
    spyOn(component.save, 'emit');
    const contact: Contact = {
      id: 1,
      avatar: 'test',
      first_name: 'test',
      last_name: 'test',
      email: 'test@avatsaev.com'
    };
    component.form.setValue(contact);
    component.submit();
    expect(component.save.emit).toHaveBeenCalledWith(contact);
  });
});
