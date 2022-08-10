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

export const accionDietas=(payload)=>{
    return{
        type:"FILTRO_DIETAS",
        payload
    }
}

export function accionOrdenAlfabetico(payload){
    return{
        type:"ORDEN_ALFABETICO",
        payload
    }
}