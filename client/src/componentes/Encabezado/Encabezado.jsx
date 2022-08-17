import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {traerLasDietas, accionDietas,accionOrigen, accionOrdenAlfabetico, accionOrdenPorPuntaje, accionBusquedaPorNombre} from "../../redux/action"
import style from "./Encabezado.module.css"

const Encabezado = ({setPaginaEnEsteMomento}) => {
    const dispatch= useDispatch();
    const dieta= useSelector(state=> state.dietas)
    console.log("ACA ESTA DIETA ", dieta)

    useEffect(()=>{
        dispatch(traerLasDietas())
    }, [dispatch])

//ARRANCO CON LAS FUNCIONES QUE MANIPULAN MIS EVENTOS

//FILTRO POR DIETAS:
const seleccionarDietas= (e)=>{
    let valor = e.target.value;
    dispatch(accionDietas(valor))
    setPaginaEnEsteMomento(1)
}

//FILTRO POR ORIGEN:
const cambiarOrigen=(e)=>{
    let valor = e.target.value;
    dispatch(accionOrigen(valor))
    setPaginaEnEsteMomento(1)
}

//ORDEN ALFABETICO:
const cambiarOrdenAlfa=(e)=>{
    let valor = e.target.value;
    dispatch(accionOrdenAlfabetico(valor))
}

//ORDEN POR PUNTAJE DE SALUD:
const cambiarPuntajeDeSalud =(e)=>{
    let valor = e.target.value;
    dispatch(accionOrdenPorPuntaje(valor))
}

//BUSCADOR POR NOMBRE:
const [busquedaNombre, setBusquedaNombre]= useState("")

const buscadorPorNombre= (e)=>{
    let busqueda = e.target.value
    setBusquedaNombre(busqueda)
}
const onSubmitPorNombre = (e)=>{
    e.preventDefault();
    dispatch(accionBusquedaPorNombre(busquedaNombre))
    setBusquedaNombre("")
    setPaginaEnEsteMomento(1)
}

    return (
    <div className={style.contenedor}>
        <select className={style.filtro} onChange={(e)=>seleccionarDietas(e)} name= "Dietas">
            <option value="todas">TODAS LAS DIETAS</option>
            {
                dieta && dieta.map((elemento, index)=>{
                    return(
                        <option key={index} value={elemento.nombre}>{elemento.nombre}</option>
                    )
                })
            }
        </select>

        <select className={style.filtro} onChange={(e)=>cambiarOrigen(e)} name="OrdenPuntajeDeSalud">
            <option value="todas">TODAS LAS RECETAS</option>
            <option value="guardadosEnLaDb">Filtrar por Origen Base de Datos</option>
            <option value="ExistenteEnApi">Filtrar por Origen Api</option>
        </select>

        <select className={style.filtro} onChange={(e)=>cambiarOrdenAlfa(e)} name="OrdenAlfabetico">
            <option value="Az">Orden de la "A" a la "Z"</option>
            <option value="Za">Orden de la "Z" a la "A"</option>
        </select>

        <select className={style.filtro} onChange={(e)=>cambiarPuntajeDeSalud(e)} name="OrdenPuntajeDeSalud">
            <option value="puntajeMinimo">Orden por Nivel de salud bajo</option>
            <option value="puntajeMaximo">Orden por Nivel de salud alto</option>
        </select>

        <form onSubmit={(e)=>onSubmitPorNombre(e)}>
            <input className={style.buscador}  type="text" value={busquedaNombre} onChange={(e)=>buscadorPorNombre(e)} placeholder="Busca por nombre de receta"/>
            <input className={style.buscador} type="submit" value="Buscar"/>
        </form>
    </div>
    )
}

export default Encabezado