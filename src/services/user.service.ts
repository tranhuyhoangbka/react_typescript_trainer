import {api, IPagination} from '../helpers';
import { IUser } from '../store/users/types';

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

const getUsersPaging = async (currentPage: number): Promise<IPagination<IUser>> => {
  const res = await api.get<IPagination<IUser>>(`/users/?page=${currentPage}`)
    .then((response) => {
      return response.data;
    });
  return res;
}

export const userService = {
  login,
  logout,
  getCurrentLoginUser,
  getUsersPaging
};