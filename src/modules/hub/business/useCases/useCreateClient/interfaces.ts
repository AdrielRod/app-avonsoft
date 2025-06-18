export interface CreateClientModel extends Omit<ClientModel, 'id'> {}

export interface CreateClientRequest extends CreateClientModel {}

export interface CreateClientResponse {
  message: string;
}
