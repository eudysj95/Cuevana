// eslint-disable-next-line no-unused-vars
import React from "react";
import { conseguirStorage } from "./conseguirStorage";
import PropTypes from "prop-types"

export const Buscar = ({setListadoState}) => {

const buscar = e => {
  e.preventDefault();

  let inputValue = e.target.value;
  let elementos = conseguirStorage();

  let nuevoArray = elementos.filter(elemento => {
    return elemento.title.includes(inputValue);
  })

  setListadoState(nuevoArray);


}

  return (
    <div className="text-center mt-8">
      <form onChange={e => buscar(e)} className="flex flex-col justify-center items-center">
        <input type="text" name="text" id="search_field" placeholder="Buscar pelicula" className="p-2 border border-slate-500 rounded-sm w-40 mb-2"/>
        <input type="submit" value="Buscar" className="bg-blue-600 text-white h-8 w-20 rounded-lg hover:bg-blue-900"/>
      </form>
    </div>
  );
};

Buscar.propTypes = {
  setListadoState: PropTypes.func
}