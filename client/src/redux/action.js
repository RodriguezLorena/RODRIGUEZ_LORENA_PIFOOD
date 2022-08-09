import axios from "axios";

export const traerLasRecetas=()=>{
    return async function(dispatch){
        try {
            let rutaRecetas= await axios("http://localhost:3001/foods")
            return dispatch({
                type: "PEDIDO_RECETAS",
                payload: rutaRecetas.data
            })
            
        } catch (error) {
          console.log("ERROR EN LA LLAMADA AL BACK A LA RUTA RECETAS ", error)  
        }

    }
    

}