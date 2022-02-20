import {LOAD_USERS_PAGING_REQUEST, 
  LOAD_USERS_PAGING_SUCCESS, 
  LOAD_USERS_PAGING_FAILURE, UsersActionTypes, IAddUserRequest, ADD_USERS_REQUEST, ADD_USERS_SUCCESS, ADD_USERS_FAILURE} from './types';

import { Dispatch } from 'redux';
import { userService } from '../../services';
// import { history } from '../../helpers';
import { UrlConstants } from '../../constants';
import { history } from '../../helpers/history';

export const loadUsersPaging = (
  keyword: string | null, currentPage: number
) => {
  return async (dispatch: Dispatch<UsersActionTypes>) => {
    try {
      dispatch({
        type: LOAD_USERS_PAGING_REQUEST
      });

      const res = await userService.getUsersPaging(keyword, currentPage);
      dispatch({
        type: LOAD_USERS_PAGING_SUCCESS,
        payload: res
      })
    } catch (error: any) {
      dispatch({
        type: LOAD_USERS_PAGING_FAILURE,
        payload: {error: error.toString()}
      })
    }
  }
}

export const addUser = (
  user: IAddUserRequest, history: any
) => {
  return async (dispatch: Dispatch<UsersActionTypes>) => {
    try {
      dispatch({
        type: ADD_USERS_REQUEST
      });

      await userService.addUser(user);
      dispatch({
        type: ADD_USERS_SUCCESS        
      });
      history.push('/users');
    } catch (error: any) {
      dispatch({
        type: ADD_USERS_FAILURE,
        payload: {error: error.toString()}
      })
    }
  }
}