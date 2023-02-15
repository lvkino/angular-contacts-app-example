import {createAction, props} from '@ngrx/store';
import { Contact, PaginationConfig } from '@app/core/models';

export const loadPerPage = createAction(
  '[Contacts] Load per page',
  props<{
    page: number,
    perPage: number
  }>()
);

export const load = createAction(
  '[Contacts] Load',
  props<{id: number}>()
);

export const create = createAction(
  '[Contacts] Create',
  props<{contact: Contact}>()
);

export const update = createAction(
  '[Contacts] Update',
  props<{contact: Partial<Contact>}>()
);

export const remove = createAction(
  '[Contacts] Remove',
  props<{id: number}>()
);

export const loadPerPageSuccess = createAction(
  '[Contacts] Load per page success',
  props<{
    contacts: Contact[],
    paginationConfig: PaginationConfig
  }>()
);

export const loadSuccess = createAction(
  '[Contacts] Load success',
  props<{'contact': Contact}>()
);

export const createSuccess = createAction(
  '[Contacts] Create success',
  props<{contact: Contact}>()
);

export const updateSuccess = createAction(
  '[Contacts] Update success',
  props<{contact: Partial<Contact>}>()
);


export const removeSuccess = createAction(
  '[Contacts] Remove success',
  props<{id: number}>()
);


export const failure = createAction(
  '[Contacts] Failure',
  props<{err: {concern: 'CREATE' | 'PATCH', error: any}}>()
);
