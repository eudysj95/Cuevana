// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='bg-[#0B5DCD] h-80 sm:h-60 max-w-4/6 object-contain lg:w-6/12 mt-10 mx-auto rounded-md p-6 text-center text-white'>
      <h1 className='font-bold text-2xl md:text-3xl mb-4 mt-6 md:mt-0'>Bienvenido a Cuevana</h1>
      <p className='text-lg md:text-xl underline underline-offset-4 mb-12'>Gran variedad de peliculas a tu disposicion</p>
      <div className='text-xl bg-[#032592] h-12 w-40 rounded-xl flex justify-center items-center mx-auto'><Link to="/peliculas">Ver Peliculas</Link></div>
    </div>
  )
}
