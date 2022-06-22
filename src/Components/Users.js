import React from 'react';

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
