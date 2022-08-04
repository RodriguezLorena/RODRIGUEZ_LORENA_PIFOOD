const {router, Router}= require("express");
const routerDietas = Router();
const { llamadaDeTodasLasDietas }= require("../controladores/controladorDietas")
const { Dieta }= require("../db");

routerDietas.get("/", async(req, res)=>{
    try {
       let datosDeLaDb= await Dieta.findAll();
    
       
       if(!datosDeLaDb.length){
        let cargarDietas = await llamadaDeTodasLasDietas()
        console.log("ACA ESTA CARGARDIETAS ", cargarDietas)
        await Dieta.bulkCreate(cargarDietas);
  
          let llamadaDeLasDieta= await Dieta.findAll();
          res.status(200).send(llamadaDeLasDieta)
       }
    } catch (error) {
        console.log("ERROR EN LA RUTA DE DIETAS ", error)
    }
})

module.exports= {routerDietas}

  