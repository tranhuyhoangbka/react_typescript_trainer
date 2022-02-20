import { IPagination } from '../../helpers';

export const LOAD_USERS_PAGING_REQUEST = 'LOAD_USERS_PAGING_REQUEST';
export const LOAD_USERS_PAGING_SUCCESS = 'LOAD_USERS_PAGING_SUCCESS';
export const LOAD_USERS_PAGING_FAILURE = 'LOAD_USERS_PAGING_FAILURE';

export const ADD_USERS_REQUEST = 'ADD_USERS_REQUEST';
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}
interface LoadUsersPagingRequest {
  type: typeof LOAD_USERS_PAGING_REQUEST;
}

interface LoadUsersPagingSuccess {
  type: typeof LOAD_USERS_PAGING_SUCCESS;
  payload: IPagination<IUser>;
}

interface LoadUsersPagingFailure {
  type: typeof LOAD_USERS_PAGING_FAILURE;
  payload: {
    error: string;
  };
}

interface AddUsersRequest {
  type: typeof ADD_USERS_REQUEST;
}

interface AddUsersSuccess {
  type: typeof ADD_USERS_SUCCESS  
}

interface AddUsersFailure {
  type: typeof ADD_USERS_FAILURE;
  payload: {
    error: string;
  };
}

export interface UsersState {
  items: IUser[];
  page: number;
  total: number;
  pageSize: number;
  loading: boolean;
  error: string | null;
}

export interface IAddUserRequest {
  user: {
    first_name: string,
    last_name: string,
    email: string,
    password: string
  }
}

export type UsersActionTypes =
  | LoadUsersPagingRequest
  | LoadUsersPagingSuccess
  | LoadUsersPagingFailure
  | AddUsersRequest
  | AddUsersSuccess
  | AddUsersFailure;