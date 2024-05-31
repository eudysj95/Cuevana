// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom"

export const Nav = () => {
    
  return (
    <nav className="bg-[#032592]">
            <ul className='h-12 flex justify-around items-center'>
                <li></li>
                <li className='font-bold text-base md:text-lg lg:text-xl text-white'><Link to="/inicio">Inicio</Link></li>
                <li className='font-bold text-base md:text-lg lg:text-xl text-white'><Link to="/peliculas">Peliculas</Link></li>
                <li className='font-bold text-base md:text-lg lg:text-xl text-white'><Link to="/agregar">Agregar</Link></li>
                <li></li>
            </ul>
        </nav>
  )
}
