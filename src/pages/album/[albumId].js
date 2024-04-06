import React from 'react';
import { useRouter } from 'next/router';
import PhotoList from '../../components/PhotoList';

const Album = () => {
  const router = useRouter();
  const { albumId } = router.query;

  return (
    <div className="container">
      <h1 className="pageHeadingCenter">PhotoList</h1>
      <PhotoList albumId={albumId} />
    </div>
  );
};

export default Album;