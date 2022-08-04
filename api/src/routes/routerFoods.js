const {Router}=require("express")
const{ llamadaTotalDeRecetas}= require("../controladores/controladorRecetas")

const routerFoods= Router();

routerFoods.get("/", async(req,res)=>{
    const todasLasRecetas= await llamadaTotalDeRecetas();
    res.status(200).send(todasLasRecetas)
})

module.exports={routerFoods}