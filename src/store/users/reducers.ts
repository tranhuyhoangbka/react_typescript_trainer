import {
  LOAD_USERS_PAGING_REQUEST,
  LOAD_USERS_PAGING_SUCCESS,
  LOAD_USERS_PAGING_FAILURE,
  UsersActionTypes,
  UsersState,
  ADD_USERS_REQUEST,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE
} from './types';

const initialState: UsersState = {
  items: [],
  page: 1,
  total: 0,
  pageSize: 10,
  loading: false,
  error: null,  
}

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionTypes
): UsersState => {
  switch(action.type) {
    case LOAD_USERS_PAGING_REQUEST: {
      return {...state, loading: true}
    }
    case LOAD_USERS_PAGING_SUCCESS: {
      return {...state, loading: false, error: null, 
        items: action.payload.data.items, page: action.payload.data.page, 
        total: action.payload.data.total, pageSize: action.payload.data.page_size}
    }
    case LOAD_USERS_PAGING_FAILURE: {
      return {...state, loading: false, error: action.payload.error}
    }
    case ADD_USERS_REQUEST: {
      return {...state, loading: true}
    }
    case ADD_USERS_SUCCESS: {
      return {...state, loading: false, error: null}
    }
    case ADD_USERS_FAILURE: {
      return {...state, loading: false, error: action.payload.error}
    }
    default:
      return state;
  }
}

export {usersReducer};