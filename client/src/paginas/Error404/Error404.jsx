import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Error404.module.css"

const Error404 = () => {
  return (
    <div className={style.contenedor}>
      <div className='vid'>
       
        </div>

    <h1 className={style.titulo}>error 404</h1>
    <p className={style.parrafo1}>Uyyy, parece que estas recetas estan caducadas</p>
    <p className={style.span}>quieres probar con este Link?? ➡️
    <Link to="/home" className={style.link}>Ir a la home</Link>
    </p>
  </div>
  )
}

export default Error404