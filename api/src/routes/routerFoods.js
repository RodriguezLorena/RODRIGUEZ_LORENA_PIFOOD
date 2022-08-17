const { Router } = require("express");
const {
  llamadaTotalDeRecetas,
  datosIdDeLaApi,
} = require("../controladores/controladorRecetas");
const {Receta, Dieta} = require("../db")


const routerFoods = Router();

routerFoods.get("/", async (req, res) => {
  try {
    const todasLasRecetas = await llamadaTotalDeRecetas();
    const { nombre } = req.query;
    
    if (nombre) {
      let nombreReceta = todasLasRecetas.filter(
        (elemento) => elemento.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      nombreReceta.length
        ? res.status(200).send(nombreReceta)
        : res.status(404).send("No existe la Receta que esta buscando");
    } else {
      res.status(200).send(todasLasRecetas);
    }
  } catch (error) {
    console.log("ACA ESTA EL ERROR EN LA RUTA POR QUERY", error);
    res.status(500).send("Error del servidor");
  }
});

routerFoods.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const unaReceta = await datosIdDeLaApi(id);

    
    if(unaReceta){
      res.status(200).send(unaReceta);
    }else{
      res.status(404).send("No existe la Receta Buscada")
    }
   
  } catch (error) {
    console.log("ACA ESTA EL ERROR EN LA RUTA POR ID ", error);
  }
});


//ESTO NO ES REQUERIDO PERO LO PRUEBO POR LAS DUDAS

routerFoods.delete("/:id", async(req, res)=>{
  try {
    const { id } = req.params;
   
    await Receta.destroy({
      where:{
        id
      }
    })
    res.status(200).send("Receta eliminada")
  } catch (error) {
    console.log("ACA ESTA EL ERROR EN LA RUTA DELETE ", error)
  }
})

module.exports = { routerFoods };
