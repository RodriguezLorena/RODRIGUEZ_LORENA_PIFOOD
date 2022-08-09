const { Router } = require("express");
const postRouter = Router();

const { Dieta, Receta } = require("../db");

postRouter.post("/", async (req, res) => {    
  try {
    const {
      nombre,
      dietas,
      resumenDelPlato,
      puntajeDeSalud,
      pasoApaso,
      imagen,
    } = req.body; //req.body es la data que le paso en el body del post

    const crearRecetas = await Receta.create({
      nombre,
      resumenDelPlato,
      puntajeDeSalud,
      pasoApaso,
      imagen,
    });  //esto es el resultado de mis datos en la base de datos

    const buscarDietasEnLaDB = await Dieta.findAll({
      where: { nombre: dietas}
    });    //aca busco en mi modelo dietas
    // console.log("aca esta buscar diestas en la db ", buscarDietasEnLaDB)

   
    
    await crearRecetas.addDieta(buscarDietasEnLaDB);   //aca adhiere lo que encuentra en dieta a el modelo de receta
    const craecionDefinitiva = await Receta.findByPk(crearRecetas.id, {
      include: [{
        model: Dieta,
        // attributes: ["nombre"],                    
        through: { attributes: [] }
      }]
    })
  
   
    
    res.status(200).send(craecionDefinitiva)
    
    
    
  } catch (error) {
    console.log("ACA ESTA EL ERROR EN LA RUTA POST ", error);
    res.status(406).send("Receta no valida");
  }
});



module.exports = { postRouter };



