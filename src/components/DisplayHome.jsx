import React from 'react';
// Assets Connection
import { albumsData } from '../assets/assets';
import { songsData } from '../assets/assets';
// Component Connection
import Navbar from './Navbar'
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
     <Navbar />
     <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Bienvenido a Spofity (AI covers)</h1>
      <div className="flex overflow-auto">
         {albumsData.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
      </div>
     </div>

     <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Canciones recomendadas</h1>
      <div className="flex overflow-auto">
         {songsData.map((item, index) => (
          <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
      </div>
     </div>
    </>
  )
}

export default DisplayHome;