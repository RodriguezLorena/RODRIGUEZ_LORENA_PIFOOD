import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'
import style from "./Tarjetas.module.css"

const Tarjetas = ({algo}) => {
  return (
    <div className={style.contenedor}>
        {
           algo && algo.map((receta)=>(
                <div key={receta.id}>
                    <Tarjeta nombre={receta.nombre} imagen={receta.imagen} dieta={receta.dieta} id={receta.id}/>
                </div>
            ))
        }
    </div>
  )
}

export default Tarjetas