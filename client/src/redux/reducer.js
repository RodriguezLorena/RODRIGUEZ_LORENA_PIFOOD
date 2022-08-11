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

    default:
      return state;
  }
}

export default reducer;
