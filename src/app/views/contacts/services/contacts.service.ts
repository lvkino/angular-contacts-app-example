import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Contact, PaginatedContactsAPI, PaginationConfig} from '@app/core/models';
import {environment} from '@app/env';


@Injectable()
export class ContactsService {
  private readonly contactsEndPoint = 'users';

  constructor(private http: HttpClient ) { }


  index(page: number, perPage: number): Observable<{
    contacts: Contact[],
    paginationConfig: PaginationConfig
  }> {
    return this.http
        .get<PaginatedContactsAPI>(`${environment.appApi.baseUrl}/${this.contactsEndPoint}?page=${page}&per_page=${perPage}`).pipe(
          map(response => ({
            contacts: response.data,
            paginationConfig: {
              page: response.page,
              per_page: response.per_page,
              total_pages: response.total_pages
            }
          })
        ));
  }

  show(conactId: number): Observable<Contact> {
    return this.http
        .get<Contact>(`${environment.appApi.baseUrl}/${this.contactsEndPoint}/${conactId}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.appApi.baseUrl}/${this.contactsEndPoint}`, contact);
  }

  update(contact: Partial<Contact>): Observable<Contact> {
    return this.http.patch<Contact>(`${environment.appApi.baseUrl}/${this.contactsEndPoint}/${contact.id}`, contact);
  }


  destroy(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.appApi.baseUrl}/${this.contactsEndPoint}/${id}`);
  }

}
