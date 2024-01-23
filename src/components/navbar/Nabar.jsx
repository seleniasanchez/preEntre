import React from "react";
import '../../estilos/estilos.css'
import logo from '../../header/logoreason.png'
import { Categorias } from "./categorias";

export const Navbar = () => {
    return (
        <>
            <header className="header px-5 py-3 d-flex justify-content-between">
                <div className="ms-5">
                    <img src={logo} />
                </div>

                <div>
                    <Categorias />
                </div>

            </header>


        </>
    )
}