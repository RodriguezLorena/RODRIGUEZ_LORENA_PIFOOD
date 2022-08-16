import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import style from "./Loading.module.css"

const Loading = () => {
    let location= useLocation()
    if(location.pathname === "/home"){
        return (
            <div className={style.contenedor}>
                <h1 className={style.titulo}> Estamos cargando los datos</h1>
                <p className={style.parrafo1}>No te vayas de esta pagina, lo bueno siempre tarda en llegar</p>
            </div>
        )
    }else{
        return(
            <div className={style.contenedor}>
            <h1 className={style.titulo}>Estamos cargando los datos</h1>
             <Link to= "/home">Volver al home</Link>
            </div>
        )
    }
 
}

export default Loading