import React from 'react';
import { useRouter } from 'next/router';
import PhotoList from '../../components/PhotoList';
import styles from '../../styles/global.module.scss';

const Album = () => {
  const router = useRouter();
  const { albumId } = router.query;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeadingCenter}>PhotoList</h1>
      <PhotoList albumId={albumId} />
    </div>
  );
};

export default Album;