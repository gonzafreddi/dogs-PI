const { Router } = require('express');
const temperamentHandler = require('../handlers/temperamentsHandler');

const router = Router()


router.get("/",temperamentHandler)


module.exports = router