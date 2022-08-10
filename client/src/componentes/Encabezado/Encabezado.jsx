import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {traerLasDietas, accionDietas, accionOrdenAlfabetico} from "../../redux/action"

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

//ORDEN ALFABETICO:
const cambiarOrdenAlfa=(e)=>{
    let valor = e.target.value;
    dispatch(accionOrdenAlfabetico(valor))
}

    return (
    <div>
        <select onChange={(e)=>seleccionarDietas(e)} name= "Dietas">
            <option value="todas">TODAS LAS DIETAS</option>
            {
                dieta && dieta.map((elemento, index)=>{
                    return(
                        <option key={index} value={elemento.nombre}>{elemento.nombre}</option>
                    )
                })
            }
        </select>

        <select onChange={(e)=>cambiarOrdenAlfa(e)} name="OrdenAlfabetico">
            <option value="Az">Orden de la "A" a la "Z"</option>
            <option value="Za">Orden de la "Z" a la "A"</option>
        </select>
    </div>
  )
}

export default Encabezado