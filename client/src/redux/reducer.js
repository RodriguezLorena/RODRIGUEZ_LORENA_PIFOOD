const estadoInicial = {
  recetas: [],
  dietas: [],
  recetaModificable: [],
  unReceta: {}
};

function reducer(state = estadoInicial, { type, payload }) {
  switch (type) {
    case "PEDIDO_RECETAS":
      return {
        ...state,
        recetas: payload,
        recetaModificable: payload,
      };

    case "PEDIDO_DIETAS":
      return {
        ...state,
        dietas: payload,
      };
    
      case "DETALLE_POR_ID":
      return{
        ...state,
        unaReceta:payload
      };

    case "DESMONTAR_RECETA":
      return{
        ...state,
        unaReceta:{}
      };

    case "FILTRO_DIETAS":
      const listaRecetas = [...state.recetaModificable];
      let listaDieta;

      if (payload === "todas") {
        listaDieta = listaRecetas;
        return {
          ...state,
          recetas: listaDieta,
        };
      } else {
        listaDieta = listaRecetas.filter((elemento) =>
          elemento.dieta?.map((elemento) => elemento.nombre.includes(payload))
        );

        if (!listaDieta.length == 0) {
          let resultadoAnterior = listaDieta;
          return {
            ...state,
            recetas: resultadoAnterior,
          };
        } else {
          let resultadoAnterior = listaRecetas;
          alert("NO EXISTE LA DIETA QUE ESTA BUSCANDO");
          return {
            ...state,
            recetas: resultadoAnterior,
          };
        }
      }
    case "ORDEN_ALFABETICO":
      const listaDeRecetas = [...state.recetaModificable];
      if (payload == "Az") {
        listaDeRecetas.sort((elementoUno, elementoDos) => {
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
        listaDeRecetas.sort((elementoUno, elementoDos) => {
          if (
            elementoUno.nombre.toLowerCase() < elementoDos.nombre.toLowerCase()
          ) {
            return 1;
          } else {
            return -1;
          }
        });
      }

    default:
      return state;
  }
}

export default reducer;
