import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@app/core/models';
import { Router } from '@angular/router';
import { ContactsStoreFacade } from '@app/contacts-store/contacts.store-facade';


@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsIndexComponent implements OnInit {

  contacts$ = this.contactsFacade.contacts$;
  pagination$ = this.contactsFacade.pagination$;

  constructor(private contactsFacade: ContactsStoreFacade, private router: Router) { }

  ngOnInit() {
    this.contactsFacade.loadContactsPerPage(1, 6);
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  showContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure?');
    if (r) {
      this.contactsFacade.deleteContact(contact.id);
    }
  }

  updateContacts(page: number) {
    this.contactsFacade.loadContactsPerPage(page, 6);
  }

}
