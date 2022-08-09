import React from 'react'
import { Link } from 'react-router-dom'
import style from "./PaginaInicial.module.css"

const PaginaInicial = () => {
  return (
    <div className={style.pagInicial}>
        <h1 className={style.titulo}>Prepará trocitos de amor comestibles</h1>
        <div className={style.contenedorBoton}>
            <Link className={style.boton} to="/home">Empezar</Link>
        </div>
    </div>
  )
}

export default PaginaInicial