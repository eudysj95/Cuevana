// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Buscar } from "../components/Buscar";
import PropTypes from "prop-types";
import { Editar } from "../components/Editar";
import { conseguirStorage } from "../components/conseguirStorage";
import { Link } from "react-router-dom";

export const Peliculas = ({ listadoState, setListadoState }) => {

  const [edit, setEdit] = useState();
  useEffect(() => {
    setListadoState(conseguirStorage());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const borrar = e => {
    e.preventDefault();

    let id = e.target.id;

    let elementos = conseguirStorage();
    
    let nuevoArray = elementos.filter(peli => {
      return peli.id != id;
    })

    setListadoState(nuevoArray);
    localStorage.setItem("pelis", JSON.stringify(nuevoArray));

  }

  return (
    <>
      <section>
        <Buscar setListadoState={setListadoState}/>
      </section>

      <section id="peliculas" className="grid grid-cols-3 mb-12">
        {listadoState !== null ? listadoState.map(peli => {
          return (
            <article key={peli.id} className="border-2 border-black h-40 w-60 mt-10 mx-auto rounded-md p-6 text-center text-black">
              <h3 className="font-bold text-xl">{peli.title}</h3>
              <p className="text-lg">{peli.description}</p>

              <div className="flex mt-4 text-white font-bold">
                <button id={peli.id} onClick={() => setEdit(peli.id)} className="text-lg bg-[#032592] h-8 w-20 rounded-xl flex justify-center items-center mx-auto">
                  Editar
                </button>
                <button id={peli.id} onClick={borrar} className="text-lg bg-[#032592] h-8 w-20 rounded-xl flex justify-center items-center mx-auto">
                  Borrar
                </button>
              </div>
              {edit === peli.id && (<Editar peli={peli} setListadoState={setListadoState} setEdit={setEdit}/>)}
            </article>
            
          );
        }): (<div className="mt-8">
            <h1 className="text-4xl">No hay peliculas para mostrar</h1>
            <button className='text-xl bg-[#032592] h-16 w-40 text-white mt-4 rounded-xl flex justify-center items-center mx-auto'><Link to="/agregar">Agrega una Pelicula</Link></button>
          </div>)
      }
      </section>
    </>
  );
};

Peliculas.propTypes = {
  listadoState: PropTypes.array,
  setListadoState: PropTypes.func,
};
