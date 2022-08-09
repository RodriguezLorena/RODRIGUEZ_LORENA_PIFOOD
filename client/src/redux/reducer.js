const estadoInicial = {
    recetas: []
};

function reducer(state = estadoInicial, {type, payload}){
 switch(type){
    case "PEDIDO_RECETAS":
        return{
            ...state,
            recetas: payload
        }
        default:
            return state;
 }
}

export default reducer;