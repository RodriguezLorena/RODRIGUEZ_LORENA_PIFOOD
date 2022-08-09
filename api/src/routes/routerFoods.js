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
        (elemento) => elemento.nombre == nombre
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




routerFoods.put("/:id", async (req, res)=> {
  try{
  const { dieta} = req.body;
  const { id }= req.params;
  const actualizar = await Receta.findOne({
      where: {
          id,
      },
      include:{
          model: Dieta,
          attribute: ['nombre']
      }
  })
  const datos = req.body;
  for(ele in datos){
      if(ele !=='dieta')actualizar[ele] = datos[ele]
       
  }
    const tiposMod = await Dieta.findAll({  
    where: { nombre: dieta}

  })
   actualizar.addDieta(tiposMod); //maaaaaaaaaaaaaaaaaaaaaaaaalllllllllllllllll
   await actualizar.save()             // ver esto, no se de donde saque
   res.status(200).send(actualizar)

   console.log("FUNCIONO MIERDA", actualizar)
  }catch (error){
      console.log(error)
  }
})
module.exports = { routerFoods };
