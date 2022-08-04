const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {routerFoods} = require("./routerFoods")
const {routerDietas} =require("./routerDietas")
const {postRouter}= require("./postRecetas")

router.use("/foods", routerFoods);
router.use("/dietas", routerDietas);
router.use("/creacion", postRouter)


module.exports = router;
