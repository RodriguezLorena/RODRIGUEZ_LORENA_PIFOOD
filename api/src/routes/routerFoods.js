const {Router}=require("express")
const{ llamadaTotalDeRecetas, datosIdDeLaApi}= require("../controladores/controladorRecetas")

const routerFoods= Router();

routerFoods.get("/", async(req,res)=>{
    const todasLasRecetas= await llamadaTotalDeRecetas();
    res.status(200).send(todasLasRecetas)
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