import CardTilt from '../cardComponent/cardComponent';
import { CreateUserRepository } from '../../main/users/infrastructure/getUsers.service';
import React from 'react';
import { getAllUsers } from '../../main/users/applications/getAllUsers';
import { useQuery } from 'react-query';

interface UserListProps {
  handleUserClick?: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ handleUserClick }) => {  
  const uRepository = CreateUserRepository()

  const {data: users} = useQuery(["users"], () => getAllUsers(uRepository))

  return (
    <React.Fragment key='albumList'>
      { users ? users.map((user) => (
        <React.Fragment key={user.id}>
          <CardTilt
            content={
              <React.Fragment>
                <span>{user.name}</span>
                <span>{user.username}</span>
              </React.Fragment>
            }
            onClick={() => handleUserClick && handleUserClick(user.id)}
            id={user.id}
          >
          </CardTilt>
        </React.Fragment>
      )):  null}
    </React.Fragment>
  );
};

export default UserList;
