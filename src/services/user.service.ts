import {api, IPagination} from '../helpers';
import { IAddUserRequest, IUpdateUserRequest, IUser, UpdateUserResponse } from '../store/users/types';

const login = async (email: string, password: string): Promise<any> => {
  const body = {email, password};
  return await api.post<any>('/session', body).then((response) => {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  });
};

const logout = () => {
  sessionStorage.removeItem('user');
};

const getCurrentLoginUser = async (): Promise<any> => {
  return await api.get<any>('/auth').then((response) => {
    return response.data;    
  });
}

const getUsersPaging = async (keyword: string | null, currentPage: number): Promise<IPagination<IUser>> => {
  const res = await api.get<IPagination<IUser>>(`/users/?page=${currentPage}&keyword=${keyword}`)
    .then((response) => {
      return response.data;
    });
  return res;
}

const addUser =async (user: IAddUserRequest): Promise<any> => {
  const res = await api.post(`/users`, user).then((response) => {
    return response.data;
  });
  return res;
}

const updateUser = async (id: string, user: IUpdateUserRequest): Promise<UpdateUserResponse> => {
  const res = await api.patch(`/users/${id}`, user).then((response) => {
    return response.data;
  });
  return res;
}

const getUserById = async (id: string) : Promise<IUser> => {
  const res = await api.get(`/users/${id}`).then((response) => {
    console.log(response.data);
    return response.data.data;
  });
  return res;
}

export const userService = {
  login,
  logout,
  getCurrentLoginUser,
  getUsersPaging,
  addUser,
  updateUser,
  getUserById
};