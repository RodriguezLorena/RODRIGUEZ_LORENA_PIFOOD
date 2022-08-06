const { router, Router } = require("express");
const routerDietas = Router();
const {
  llamadaDeTodasLasDietas,
} = require("../controladores/controladorDietas");
const { Dieta } = require("../db");

routerDietas.get("/", async (req, res) => {
  try {
    let datosDeLaDb = await Dieta.findAll();

    if (!datosDeLaDb.length) {
      const cargarDietas = await llamadaDeTodasLasDietas();
      const cargaditas = cargarDietas.map((elemento) => {
        return { nombre: elemento.nombre };
      });
      console.log("ACA ESTA CARGARDIETAS ", cargaditas);
      await Dieta.bulkCreate(cargaditas);

      const llamadaDeLasDieta = await Dieta.findAll();
      return res.status(200).send(llamadaDeLasDieta);
    }
    res.status(200).send(datosDeLaDb);
  } catch (error) {
    console.log("ERROR EN LA RUTA DE DIETAS ", error);
  }
});

module.exports = { routerDietas };
