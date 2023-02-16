import { Observable, of } from 'rxjs';
import { Contact, PaginationConfig } from '@app/core/models';


export class ContactsServiceMock {

  contacts = [{
    id: 1,
    first_name: 'john',
    last_name: 'Doe',
    email: 'john@gmail.com',
    avatar: 'john.jpg'
  }, {
    id: 2,
    first_name: 'adam',
    last_name: 'doe',
    email: 'adam@gmail.com',
    avatar: 'adam.jpg'
  }];

  paginationConfig: {
    page: 1,
    per_page: 6,
    total_pages: 2
  };

  index(): Observable<{
    contacts: Contact[],
    paginattionConfig: PaginationConfig
  }> {
    return of({
      contacts: this.contacts,
      paginattionConfig: this.paginationConfig
    });
  }

  show(conactId: number): Observable<Contact> {
    return of({
      id: 1,
      first_name: 'john',
      last_name: 'john',
      email: 'john@gmail.com',
      avatar: 'avatar.jpg'
    });
  }

  create(contact: Contact) {
    return of({
      id: 4,
      avatar: 'avatar.jpg',
      first_name: 'john',
      last_name: 'doe',
      email: 'john@gmail.com'
    });
  }

  destroy(id: number): Observable<number> {
    return of(1);
  }

  update(contact: Contact): Observable<Contact> {
    return of(contact);
  }

}
