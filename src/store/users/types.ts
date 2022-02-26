import { IPagination } from '../../helpers';

export const LOAD_USERS_PAGING_REQUEST = 'LOAD_USERS_PAGING_REQUEST';
export const LOAD_USERS_PAGING_SUCCESS = 'LOAD_USERS_PAGING_SUCCESS';
export const LOAD_USERS_PAGING_FAILURE = 'LOAD_USERS_PAGING_FAILURE';

export const ADD_USERS_REQUEST = 'ADD_USERS_REQUEST';
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';

export const GET_USER_BY_ID_REQUEST = 'GET_USER_BY_ID_REQUEST';
export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

export interface IUpdateUserRequest {
  user: {
    first_name: string;
    last_name: string;
    email: string;
  }
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

interface GetUserByIdRequest {
  type: typeof GET_USER_BY_ID_REQUEST;
}

interface GetUserByIdSuccess {
  type: typeof GET_USER_BY_ID_SUCCESS;
  payload: {
    user: IUser;
  };
}
interface GetUserByIdFailure {
  type: typeof GET_USER_BY_ID_FAILURE;
  payload: {
    error: string;
  };
}

interface UpdateUserRequest {
  type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
}

interface UpdateUserFailure {
  type: typeof UPDATE_USER_FAILURE;
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
  editUser: IUser | null;
}

export interface IAddUserRequest {
  user: {
    first_name: string,
    last_name: string,
    email: string,
    password: string
  }
}

export interface UpdateUserResponse {
  status: string,
  data?: IUser | null,
  message?: string | null
}

export type UsersActionTypes =
  | LoadUsersPagingRequest
  | LoadUsersPagingSuccess
  | LoadUsersPagingFailure
  | AddUsersRequest
  | AddUsersSuccess
  | AddUsersFailure
  | GetUserByIdSuccess
  | GetUserByIdRequest
  | GetUserByIdFailure
  | UpdateUserRequest
  | UpdateUserSuccess
  | UpdateUserFailure;