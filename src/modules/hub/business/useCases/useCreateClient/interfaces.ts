export interface CreateClientModel extends Omit<ClientModel, 'id'> {}

export interface CreateClientRequest
  extends Omit<ClientModel, 'missingLetter' | 'id'> {}

export interface CreateClientResponse {
  message: string;
}
