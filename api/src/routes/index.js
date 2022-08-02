const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {routerFoods} = require("./routerFoods")

router.use("/foods", routerFoods)

module.exports = router;
