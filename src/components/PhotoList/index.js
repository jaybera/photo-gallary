import React, { useEffect, useState } from 'react';
import styles from '../../styles/global.module.scss';

const PhotoList = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);

  const getPhotoList = async (albumId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const data = await response.json();

      setPhotos(data);
    } catch(error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    // 	.then((response) => response.json())
		// 	.then((data) => setPhotos(data))
    getPhotoList(albumId);
  }, [albumId]);

  return (
    <div className={styles.listWrapper}>
      {photos.map(photo => (
        <div className={styles.singleItem} key={photo.id}><img width={200} height={200} src={photo.url} /></div>
      ))}
    </div>
  );
};

export default PhotoList;