export interface Contact {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface PaginationConfig {
  page: number;
  per_page: number;
  total_pages: number;
}

export interface PaginatedContactsAPI {
  page: number;
  per_page: number;
  total?: number;
  total_pages: number;
  data: Contact[];
}
