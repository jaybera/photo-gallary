
import React from 'react';
import UserList from '../components/UserList';

const Home = () => {
  return (
    <div className="container">
      <h1>User List</h1>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default Home;