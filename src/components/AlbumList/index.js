import React, { useEffect, useState } from 'react';
import styles from '../../styles/global.module.scss';

const AlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);

    const getAlbumList = async (userId) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const data = await response.json();
          
        setAlbums(data);
      } catch(error) {
        console.log(error);
      }
    }
  

  useEffect(() => {
    getAlbumList(userId);
    // fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
		// 		.then((response) => response.json())
		// 		.then((data) => setAlbums(data));
  }, [userId]);

  console.log("albums ::", albums);


  return (
    <ul className={styles.albumList}>
      {albums.map(album => (
        <li key={album.id}>
          <a href={`/album/${album.id}`}>{album.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default AlbumList;