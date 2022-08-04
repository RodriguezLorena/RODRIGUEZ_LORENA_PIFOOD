const axios = require("axios")
// const{dataPorId}=require("../DatosJson/dataPorIdCreo")
// const { dataPrueba}= require("../DatosJson/dataPrueba")
// const {dataTotalCreo}= require("../DatosJson/dataTotalCreo")
// const {dataTotalEsteSi}=require("../DatosJson/dataTotalEsteSi")
const {
    API_KEY_DOS  
  } = process.env;
const {Receta, Dieta}= require("../db")


const datosApi = async() =>{
    try {
        const limite =100
        const promesas= await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=545188657ff346108c02eac30c79dfff&addRecipeInformation=true&number=${limite}`)
        const datosObtenidos= await promesas.data.results.map((elemento)=>{
            return{
                id: elemento.id,
                nombre: elemento.title,
                dietas: elemento.diets,
                resumenDelPlato: (elemento.summary.replace( /(<([^>]+)>)/ig, '')),
                puntajeDeSalud: elemento.healthScore,
                pasoApaso: (elemento.analyzedInstructions[0]&&elemento.analyzedInstructions[0].steps?elemento.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):''),
                imagen: elemento.image
            }
    })
    // console.log("ACA ESTAN LOS DATOS OBTENIDOS ", datosObtenidos.length)
       return datosObtenidos  
    } catch (error) {
        console.log("ACA HAY UN ERROR EN LA LLAMADA A LA API ", error)
    }
}

const datosDeLaDB= async ()=>{
try {
    return await Receta.findAll({
        includes:{
            model: Dieta,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })
} catch (error) {
    console.log("ESTO ES UN ERROR EN LA LLAMADA A LA BASE DE DATOS ", error)
}
}

const llamadaTotalDeRecetas= async()=>{
    try {
      const datosDeLaApi= await datosApi();
      const datosDelaBase = await datosDeLaDB();
      const datosTotales= [...datosDeLaApi, ...datosDelaBase]; 
      return datosTotales;
    } catch (error) {
        console.log("ACA ESTA EL ERROR A LA LLAMADA DE AMBAS RECURSOS ", error)
    }
}


//GUARDAR LAS DIETAS: 
// const datosIdDeLaApi= async(id)=>{
//     try {
//         return await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=545188657ff346108c02eac30c79dfff`)
//     } catch (error) {
//        console.log("ACA ESTA EL ERROR EN LA LLAMADA A LA API POR ID ", error) 
//     }
// }




module.exports={
    datosApi,
    llamadaTotalDeRecetas, 
    
}



// state = [1,2,3]

//state1 [1,2]


// state

//...state



