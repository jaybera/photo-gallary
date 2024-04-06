
import React from 'react';
import UserList from '../components/UserList';
import styles from '../styles/global.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>User List</h1>
      <div className="user-list">
        <UserList />
      </div>
    </div>
  );
};

export default Home;