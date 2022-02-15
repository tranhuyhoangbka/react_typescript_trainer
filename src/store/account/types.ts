export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export interface AuthenticatedUser {
  id: number;
  email: string;
  access_token: string;
}

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    status: string,
    data: {
      id: number,
      access_token: string,
      email: string
    }
  };
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: {
    status: 'error',
    message: string
  };
  // payload: any;
}

interface Logout {
  type: typeof LOG_OUT;
}

export interface AccountState {
  user: AuthenticatedUser | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}

export type AccountActionTypes =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | Logout;