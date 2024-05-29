// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { conseguirStorage } from "./conseguirStorage";

// eslint-disable-next-line no-unused-vars
export const Editar = ({ peli, setListadoState, setEdit }) => {

  const edit = (e) => {
    e.preventDefault();
    let elementos = conseguirStorage();

    let title = e.target.title.value;
    let description = e.target.description.value;

    let pelicula = {
      id: peli.id,
      title,
      description
    }

    let index = elementos.findIndex(elemento => elemento.id === peli.id )

    console.log(index);

    elementos[index] = pelicula;

    setListadoState(elementos);
    localStorage.setItem("pelis", JSON.stringify(elementos));
    setEdit(0);
    

  };

  return (
    <div className="bg-[#0B5DCD] h-44 w-72 pt-4 rounded-md">
      <form onSubmit={edit} className="flex flex-col items-center ">
        <input
          type="text"
          name="title"
          id="title"
          placeholder={peli.title}
          className="p-2 rounded-md w-60 mb-2"
        />
        <textarea
          className="p-2 rounded-md w-60"
          name="description"
          id="description"
          placeholder={peli.description}
        ></textarea>
        <input
          type="submit"
          value="Guardar"
          className="text-lg bg-[#032592] h-6 w-20 text-white mt-4 rounded-xl flex justify-center items-center mx-auto"
        />
      </form>
    </div>
  );
};

Editar.propTypes = {
  peli: PropTypes.array,
  setListadoState: PropTypes.func,
  setEdit: PropTypes.func
};
