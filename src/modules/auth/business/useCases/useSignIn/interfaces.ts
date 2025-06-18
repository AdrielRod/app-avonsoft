export interface ResendEmailParams extends ResendEmailRequest {
  email: string;
}

export interface ResendEmailRequest {
  email: string;
}

export interface ResendEmailResponse {
  message: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  email: string;
  email_must_be_verified: boolean;
}
