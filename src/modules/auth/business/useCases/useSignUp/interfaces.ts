export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  access_token: string;
  refresh_token: string;
  email: string;
}
