// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { guardarStorage } from '../components/guardarStorage';
import { useNavigate } from 'react-router-dom';

export const Agregar = () => {

  const [ listadoState, setListadoState ] = useState({});
  const navegar = useNavigate();


  const crear = e => {
    e.preventDefault();
    console.log(listadoState)

    let title = e.target.title.value;
    let description = e.target.description.value;
    
    let pelicula = {
      id: new Date().getTime(),
      title,
      description
    }

    setListadoState(pelicula);
    guardarStorage(pelicula);
    navegar("/peliculas")

  }

  return (
    <div className="bg-[#0B5DCD] h-64 w-6/12 mt-10 mx-auto rounded-md p-6 text-center text-white">
      <h3 className="font-bold text-white text-lg sm:text-2xl mb-6">Añadir pelicula</h3>
      <form onSubmit={crear} className='flex flex-col items-center'>
        <input className='p-2 rounded-md w-44 sm:w-60 mb-2 text-black' type="text" name="title" placeholder="Titulo" />
        <textarea className='p-2 rounded-md w-44 sm:w-60 text-black' name="description" placeholder="Descripción"></textarea>
        <input className='text-xl bg-[#032592] h-8 w-28 text-white mt-4 rounded-xl flex justify-center items-center mx-auto' type="submit" id="save" value="Guardar" />
      </form>
    </div>
  )
}