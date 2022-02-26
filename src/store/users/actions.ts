import {LOAD_USERS_PAGING_REQUEST, 
  LOAD_USERS_PAGING_SUCCESS, 
  LOAD_USERS_PAGING_FAILURE, UsersActionTypes, IAddUserRequest, ADD_USERS_REQUEST, ADD_USERS_SUCCESS, ADD_USERS_FAILURE, GET_USER_BY_ID_REQUEST, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE, IUpdateUserRequest, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE} from './types';

import { Dispatch } from 'redux';
import { userService } from '../../services';
import { UrlConstants } from '../../constants';
import { AlertActionTypes } from '../alert/types';
import { alertError, alertSuccess, clearAlert } from '../alert/actions';

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
  return async (dispatch: Dispatch<UsersActionTypes | AlertActionTypes>) => {
    try {
      dispatch({
        type: ADD_USERS_REQUEST
      });

      dispatch(alertSuccess('Create user successfully!'));

      await userService.addUser(user);
      dispatch({
        type: ADD_USERS_SUCCESS        
      });
      history.push('/users');
    } catch (error: any) {
      dispatch({
        type: ADD_USERS_FAILURE,
        payload: {error: error.toString()}
      });

      dispatch(alertError('Create user error!'));
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  }
}

export const getUserById = (id: string) => {
  return async (dispatch: Dispatch<UsersActionTypes>) => {
    try {
        dispatch({
          type: GET_USER_BY_ID_REQUEST
        });
        const res = await userService.getUserById(id);

        dispatch({
          type: GET_USER_BY_ID_SUCCESS,
          payload: {
            user: res
          }
        });
    } catch (error: any) {
      dispatch({
        type: GET_USER_BY_ID_FAILURE,
        payload: {
          error: error.toString()
        }
      });
    }
  }
}

export const updateUser = (id: string, user: IUpdateUserRequest, history: any) => {
  return async (dispatch: Dispatch<UsersActionTypes | AlertActionTypes>) => {
    try {
      dispatch({type: UPDATE_USER_REQUEST});

      await userService.updateUser(id, user);
      dispatch({
        type: UPDATE_USER_SUCCESS        
      });
      dispatch(alertSuccess('Cap nhat nguoi dung thanh cong'));
      history.push(UrlConstants.USERS_LIST);
    } catch (error: any) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: {error: error.toString()}
      })
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  }
}