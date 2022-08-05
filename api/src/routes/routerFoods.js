const {Router}=require("express")
const{ llamadaTotalDeRecetas, datosIdDeLaApi}= require("../controladores/controladorRecetas")

const routerFoods= Router();

routerFoods.get("/", async(req,res)=>{
    try {
        const todasLasRecetas= await llamadaTotalDeRecetas();
         const {nombre}=req.query;
         if(nombre){
            let nombreReceta= todasLasRecetas.filter((elemento)=>elemento.nombre == nombre)
            nombreReceta.length?
            res.status(200).send(nombreReceta)
            : res.status(204).send("No existe la dieta que esta buscando")

         }else{
            res.status(200).send(todasLasRecetas)
         }
    } catch (error) {
        console.log("ACA ESTA EL ERROR EN LA RUTA POR QUERY", error)
        res.status(500).send("Error del servidor")
    }
   
    
    
    
})


routerFoods.get("/:id", async(req,res)=>{
    try {
      const {id}=req.params;
      const unaReceta= await datosIdDeLaApi(id)
      res.status(200).send(unaReceta)
    } catch (error) {
        console.log("ACA ESTA EL ERROR EN LA RUTA POR ID ", error)
    }
})

module.exports={routerFoods}