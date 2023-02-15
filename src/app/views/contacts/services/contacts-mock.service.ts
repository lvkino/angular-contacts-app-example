import { Observable, of } from 'rxjs';
import { Contact } from '@app/core/models';


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

  index(): Observable<Contact[]> {
   return of(this.contacts);
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
      name: 'john doe',
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
