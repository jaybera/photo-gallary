import React, { useEffect, useState } from 'react';
import styles from '../../styles/global.module.scss';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUserList = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUsers(data);
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className={styles.userList}>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;