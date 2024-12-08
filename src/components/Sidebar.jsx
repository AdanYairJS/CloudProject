import React from "react";
import { useNavigate } from "react-router-dom";
// Assets Connection
import {assets} from '../assets/assets'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Inicio</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Buscar</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Tu Biblioteca</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Crea tu primera playlist</h1>
          <p className="font-light">Es fácil, nosotros te ayudaremos</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Crear Playlist</button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Encuentra algunos podcasts para seguir</h1>
          <p className="font-light">Te mantendremos al tanto de nuevos episodios</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Explorar Podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;