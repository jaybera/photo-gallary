import React from 'react';
import { useRouter } from 'next/router';
import AlbumList from '../../components/AlbumList';
import styles from '../../styles/global.module.scss';

const User = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div className={styles.container}>
      <h1>Album List</h1>
      <AlbumList userId={userId} />
    </div>
  );
};

export default User;