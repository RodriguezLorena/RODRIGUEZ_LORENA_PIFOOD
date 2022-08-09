import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'

const Tarjetas = ({recetas}) => {
  return (
    <div>
        {
            recetas && recetas.map((receta)=>(
                <div key={receta.id}>
                    <Tarjeta nombre={receta.nombre} imagen={receta.imagen} dieta={receta.dieta} id={receta.id}/>
                </div>
            ))
        }
    </div>
  )
}

export default Tarjetas