import {
  LOAD_USERS_PAGING_REQUEST,
  LOAD_USERS_PAGING_SUCCESS,
  LOAD_USERS_PAGING_FAILURE,
  UsersActionTypes,
  UsersState,
  ADD_USERS_REQUEST,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILURE,
  DELETE_USERS_REQUEST
} from './types';

const initialState: UsersState = {
  items: [],
  page: 1,
  total: 0,
  pageSize: 10,
  loading: false,
  error: null,
  editUser: null
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
    case GET_USER_BY_ID_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USER_BY_ID_SUCCESS: {
      return {
        ...state,
        editUser: action.payload.user,
        loading: false,
        error: null,
      };
    }
    case GET_USER_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case UPDATE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case DELETE_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case DELETE_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
}

export {usersReducer};