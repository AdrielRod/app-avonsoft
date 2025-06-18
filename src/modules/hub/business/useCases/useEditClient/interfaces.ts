export interface EditClientModel extends Omit<ClientModel, 'id'> {}

export interface EditClientRequest {
  name: string;
}

export interface EditClientParams {
  name: string;
  id: string;
}

export interface EditClientResponse {
  message: string;
}
