const axios = require("axios");
const { llamadaTotalDeRecetas } = require("./controladorRecetas");

const llamadaDeTodasLasDietas = async () => {
  try {
    let todosLasDietas = await llamadaTotalDeRecetas();

    let dietas = todosLasDietas.map((elemento) => elemento.dieta.map(ele=> ele.nombre));

    console.log("ACA ESTA DIETAS ", dietas)
   
    let juntarDietas = dietas.join(",").split(",");

    let todasLasDietas = [];
    for (let i = 0; i < juntarDietas.length; i++) {
      if (!todasLasDietas.includes(juntarDietas[i])) {
        todasLasDietas.push(juntarDietas[i]);
      }
    }
   
    let dietasObj = todasLasDietas.map((elemento) => {
      return { nombre: elemento };
    });
    
    return dietasObj;
  } catch (error) {
    
  }
};

module.exports = {
  llamadaDeTodasLasDietas,
};
