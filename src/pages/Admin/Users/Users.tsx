import React, { useEffect } from 'react'
import { IUser } from '../../../store/users/types'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { loadUsersPaging } from '../../../store/users/actions';

export const Users = () => {
  const users: IUser[] = useSelector((state: AppState) => state.users.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersPaging(1));
  }, [dispatch])

  const userElements: JSX.Element[] = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.created_at}</td>
      </tr>
    );
  })

  return (
    <>
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Danh sach nguoi dung</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Created at</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userElements}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
