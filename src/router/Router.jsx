// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../Layout/Inicio";
import { Peliculas } from "../Layout/Peliculas";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";
import { Nav } from "../Layout/Nav";
import { Agregar } from "../Layout/Agregar";

export const Router = () => {

    const [listadoState, setListadoState ] = useState([])

    return(
        <BrowserRouter>
        
        {/* Layout */}
        <Header/>

        <Nav/>

        {/* Content */}
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/peliculas" element={<Peliculas listadoState={listadoState} setListadoState={setListadoState}/>}/>
            <Route path="/agregar" element={<Agregar listadoState={listadoState} setListadoState={setListadoState}/>}/>

        </Routes>

        {/* Footer */}
            <Footer/>


        </BrowserRouter>
    )


}