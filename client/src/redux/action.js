import axios from "axios";

export const traerLasRecetas = () => {
  return async function (dispatch) {
    try {
      let rutaRecetas = await axios("http://localhost:3001/foods");
      return dispatch({
        type: "PEDIDO_RECETAS",
        payload: rutaRecetas.data,
      });
    } catch (error) {
      console.log("ERROR EN LA LLAMADA AL BACK A LA RUTA RECETAS ", error);
    }
  };
};

export function traerLasDietas(){
    return async function(dispatch){
        try {
            let rutaDieta= await axios("http://localhost:3001/dietas")
            console.log("aca esta ruta dieta ", rutaDieta)
            return dispatch({
                type: "PEDIDO_DIETAS",
                payload:rutaDieta.data
            })
        } catch (error) {
            console.log("ERROR EN LA LLAMADA A LA RUTA DE DIETAS ", error)
        }
    }
}

export function detalleDeReceta(id){
  return async function(dispatch){
    try {
      let detalle= await axios(`http://localhost:3001/foods/${id}`)
      return dispatch({
        type: "DETALLE_POR_ID",
        payload: detalle.data
      })
    } catch (error) {
      console.log("ERROR EN LA RUTA DE DETALLE ", error)
    }
  }
}

export function desmontarReceta(){
  return({
    type: "DESMONTAR_RECETA"
  })
}
export const accionDietas=(payload)=>{
    return{
        type:"FILTRO_DIETAS",
        payload
    }
}

export const accionOrigen = (payload)=>{
  return{
    type: "FILTRO_ORIGEN",
    payload
  }
}
export function accionOrdenAlfabetico(payload){
    return{
        type:"ORDEN_ALFABETICO",
        payload
    }
}

export function accionOrdenPorPuntaje(payload){
  return{
    type: "ORDEN_PUNTAJE",
    payload
  }
}

export const accionBusquedaPorNombre = (nombre)=>{
  return async function(dispatch){
    try {
      if(nombre){
        let respuesta = await axios(`http://localhost:3001/foods?nombre=${nombre}`)
        return dispatch({
          type: "BUSQUEDA_POR_NOMBRE",
          payload: respuesta.data
        })
      }else{
        alert("INGRESA UN NOMBRE DE RECETA")
      }
     
    } catch (error) {
      console.log("ERROR EN LA LLAMADA POR QUERY NOMBRE ", error)
      alert("NO EXISTE LA RECETA QUE BUSCA")
    }
  }
}
export const formularioDeCreacion= async(payload)=>{
  try {
    console.log("ACA ESTA PAYLOAD FORMULARIO ", JSON.stringify(payload))
    let crearReceta= await axios.post("http://localhost:3001/creacion", payload)
    return crearReceta
    
  } catch (error) {
    console.log("ERROR EN LA RUTA DE CREACION ", error)
  }
}

