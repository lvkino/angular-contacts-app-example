import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact, PaginationConfig } from '@app/core/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {


  @Input() contacts: Contact[];
  @Input() pagination: PaginationConfig;
  @Output() page = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Contact>();
  @Output() show = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  contactsTrackByFn = (index: number, contact: Contact) => contact.id;

  constructor() {}

  ngOnInit() {}


  changePage(event: MouseEvent, page: number) {
    event.stopPropagation();
    if (page < 1 || page > this.pagination.total_pages) { return; }
    this.page.emit(page);
  }

  showDetails(contact: Contact) {
    this.show.emit(contact);
  }

  editContact(contact: Contact) {
    this.edit.emit(contact);
  }

  deleteContact(contact: Contact) {
    this.remove.emit(contact);
  }

}
