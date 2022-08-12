import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import {detalleDeReceta, desmontarReceta} from "../../redux/action"

const Detalle = () => {
  const {id} = useParams();
  console.log("aca esta id ", id)

  const unaReceta = useSelector((state)=> state.unaReceta);
  console.log("aca esta unaReceta ", unaReceta)
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(detalleDeReceta(id))
    return ()=>{
      dispatch(desmontarReceta())
    }
  },[dispatch, id])
 
   return (
    <div>
      <h2>Codigo:{unaReceta.id}</h2>
      <h2>Nombre:{unaReceta.nombre}</h2>
      <span>Dieta:{unaReceta.dieta?.map((ele, index)=><p key={index}>{ele.nombre}</p>)}</span>
      <span>Resumen del plato:</span>
      <p>{unaReceta.resumenDelPlato}</p>
      <span>Paso a paso:</span>
      <p>{unaReceta.pasoApaso}</p>
      <span>Puntaje de Salud:</span>
      <p>{unaReceta.puntajeDeSalud}</p>
      <img src={unaReceta.imagen} alt={unaReceta.nombre} />
    </div>
  )
}

export default Detalle
