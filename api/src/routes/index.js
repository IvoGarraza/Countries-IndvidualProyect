const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeCountry = require('./Countries.js')
const routeActivity = require('./Activities.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', routeCountry)
router.use('/activities', routeActivity)

module.exports = router;
