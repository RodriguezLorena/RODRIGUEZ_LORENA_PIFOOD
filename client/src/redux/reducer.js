const estadoInicial = {
  recetas: [],
  dietas: [],
  recetaModificable: [],
  unaReceta: {},
};

function reducer(state = estadoInicial, { type, payload }) {
  switch (type) {
    case "PEDIDO_RECETAS":
      console.log("aca esta pedido dietas ", payload);
      return {
        ...state,
        recetas: payload,
        recetaModificable: payload,
      };

    case "PEDIDO_DIETAS":
      console.log("aca esta pedido dietas ", payload);
      return {
        ...state,
        dietas: payload,
      };

    case "DETALLE_POR_ID":
      console.log("aca esta payload ", payload)
      return {
        ...state,
        unaReceta: payload,
      };

    case "DESMONTAR_RECETA":
      return {
        ...state,
        unaReceta:{},
      };

    case "FILTRO_DIETAS":
      console.log("aca esta filtro dietas ")
      const listaRecetas = [...state.recetas];
      let listaDieta;

      if (payload === "todas") {
        listaDieta = listaRecetas;
      } else {
        console.log("aca esta el else")
        
        const listaDietax  = listaRecetas.filter(
          (elemento) => elemento.dieta?.filter(
            (elemento) => elemento.nombre === payload).length
        );
        console.log("esta es lista dietax", listaDietax)
       listaDieta = listaDietax.length ? listaDietax : listaRecetas;
        
       if(!listaDietax.length){
        alert("no existe dieta")
       }
       }
      
      return{
        ...state,
        recetaModificable: listaDieta
      }

    case "FILTRO_ORIGEN":
      const todasLasRecetas = [...state.recetas]
      let filtrados;
      if(payload === "todas"){
        filtrados = todasLasRecetas
      }else{
        const auxiliar = payload === "guardadosEnLaDb" 
        ? todasLasRecetas.filter((receta)=> receta.id.toString().length > 10)
        : todasLasRecetas.filter((receta)=> receta.id.toString().length < 10)
        filtrados = auxiliar.length ? auxiliar : todasLasRecetas;
        
        if(!auxiliar.length){
         alert("NO EXISTE NINGUNA RECETA EN NUESTRA BASE DE DATOS")
        }
      }
      return{
        ...state,
        recetaModificable: filtrados
      }

    case "ORDEN_ALFABETICO":
      const listaDeRecetas = [...state.recetaModificable];
      let ordenados;
      if (payload === "Az") {
        ordenados = listaDeRecetas.sort((elementoUno, elementoDos) => {
          if (
            elementoUno.nombre.toLowerCase() < elementoDos.nombre.toLowerCase()
          ) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      if (payload === "Za") {
        ordenados = listaDeRecetas.sort((elementoUno, elementoDos) => {
          if (
            elementoUno.nombre.toLowerCase() < elementoDos.nombre.toLowerCase()
          ) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      return {
        ...state,
        recetaModificable: ordenados,
      };

    case "ORDEN_PUNTAJE":
      let puntaje= [...state.recetaModificable];
      if(payload === "puntajeMinimo"){
        puntaje.sort((puntaje1, puntaje2)=>{
          if(Number(puntaje1.puntajeDeSalud) < Number(puntaje2.puntajeDeSalud)){
            return -1;
          }else{
            return 1;
          }
        })
      }
      if(payload === "puntajeMaximo"){
        puntaje.sort((puntaje1, puntaje2)=>{
          if(Number(puntaje1.puntajeDeSalud) < Number(puntaje2)){
            return 1
          }else{
            return -1
          }
        })
      }
      return{
        ...state,
        recetaModificable: puntaje
      }

    case "BUSQUEDA_POR_NOMBRE":
      if(!payload.data){
        return alert("NO SE ENCUENTRA UNA RECETA CON ESE NOMBRE")
      }else{
        return{
          ...state,
          recetas: payload.data
        }
      }
    default:
      return state;
  }
}

export default reducer;
