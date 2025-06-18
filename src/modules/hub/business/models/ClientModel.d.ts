declare interface ClientModel {
  id: string;
  dateOfBirth: string;
  email: string;
  name: string;
  missingLetter: string;
}

declare interface ClientListModel {
  items: ClientModel[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
