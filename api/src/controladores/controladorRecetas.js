const axios = require("axios")
// const{dataPorId}=require("../DatosJson/dataPorIdCreo")
// const { dataPrueba}= require("../DatosJson/dataPrueba")
// const {dataTotalCreo}= require("../DatosJson/dataTotalCreo")
// const {dataTotalEsteSi}=require("../DatosJson/dataTotalEsteSi")

const datosApi = async() =>{
    try {
        const limite =100
        const promesas= await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=545188657ff346108c02eac30c79dfff&addRecipeInformation=true&number=${limite}`)
        const datosObtenidos= await promesas.data.results.map((elemento)=>{
            return{
                id: elemento.id,
                nombre: elemento.title,
                diestas: elemento.diests,
                resumenDelPlato: elemento.summary,
                puntajeDeSalud: elemento.score,
                pasoApaso: elemento.analyzedInstructions[0]?.steps.map(elemento=>{
                    return{
                        numero: elemento.number,
                        pasoApaso: elemento.step
                    }
                }),
                imagen: elemento.image
            }
    })
    // console.log("ACA ESTAN LOS DATOS OBTENIDOS ", datosObtenidos.length)
       return datosObtenidos  
    } catch (error) {
        console.log("ACA HAY UN ERROR EN LA LLAMADA A LA API ", error)
    }
}

module.exports={
    datosApi
}