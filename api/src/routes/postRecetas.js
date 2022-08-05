const { Router} = require("express");
const postRouter= Router();

const { Dieta, Receta} = require("../db");

postRouter.post("/", async(req, res)=>{
    try {
        const {nombre, dietas, resumenDelPlato, puntajeDeSalud, pasoApaso, imagen}= req.body;

        const crearRecetas= await Receta.create({
            nombre,
            resumenDelPlato,
            puntajeDeSalud,
            pasoApaso,
            imagen,
        })
       
     
        const buscarDietasEnLaDB= await Dieta.findAll({
          where:{ nombre:dietas},
        })

       await crearRecetas.addDieta(buscarDietasEnLaDB);
        console.log("ACA ESTA CREAR RECETAS ", buscarDietasEnLaDB)
        res.status(200).send(crearRecetas)
    } catch (error) {
        console.log("ACA ESTA EL ERROR EN LA RUTA POST ", error)
    }
})

module.exports ={postRouter}
           