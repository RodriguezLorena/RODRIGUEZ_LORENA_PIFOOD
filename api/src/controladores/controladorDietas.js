const axios = require("axios");
const { llamadaTotalDeRecetas } = require("./controladorRecetas")

const llamadaDeTodasLasDietas= async()=>{
    try {
        let todosLasDietas= await llamadaTotalDeRecetas();
        
        let dietas= todosLasDietas.map(elemento=> elemento.dietas)
        console.log("ACA ESTA LA LLAMADATOTALDERECETAS ", dietas.length)
        let juntarDietas=  dietas.join(",").split(",")
       

        let todasLasDietas= [];
        for(let i = 0; i < juntarDietas.length; i++){
            if(!todasLasDietas.includes(juntarDietas[i] && juntarDietas[i])){
                todasLasDietas.push(juntarDietas[i])
            }
        }
        console.log("ACA ESTA TODASLASDIETAS ", todasLasDietas)
        let dietasObj = todasLasDietas.map((elemento) => {
            return {nombre: elemento}}) 
   console.log("ACA ESTA EL ERROR EN LAS DIESTASOBJ", dietasObj.length)
          return dietasObj;
    } catch (error) {
        console.log("ACA ESTA EL ERROR EN LA LLAMADA A DIETAS ", error)
    }
}


module.exports= {
    llamadaDeTodasLasDietas
}


