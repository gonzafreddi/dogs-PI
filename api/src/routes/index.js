const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const breedRouter = require("./breedRouter.js")
const temperamentRouter = require("./temperamentsRouter.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/breed", breedRouter)
router.use("/temp", temperamentRouter)

module.exports = router;
