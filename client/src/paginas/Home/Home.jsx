import React from 'react'
import Tarjetas from '../../componentes/Trajetas/Tarjetas';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {traerLasRecetas} from "../../redux/action"

const Home = () => {
  const dispatch= useDispatch();
  const recetas= useSelector((state)=>state.recetas);

  useEffect(()=>{
    dispatch(traerLasRecetas());
  }, [dispatch])

  return (
    <div>Home
      <Tarjetas recetas={recetas}/>
    </div>
  )
}

export default Home