const {Router}=require("express")
const{datosApi}= require("../controladores/controladorRecetas")

const routerFoods= Router();

routerFoods.get("/", async(req,res)=>{
    const todasLasRecetas= await datosApi();
    res.status(200).send(todasLasRecetas)
})

module.exports={routerFoods}