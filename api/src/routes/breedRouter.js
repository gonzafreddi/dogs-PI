const { Router } = require('express');
const {getBreedHandler} = require("../handlers/breedHandler");
const {getByIdHandler}= require('../handlers/breedHandler');
const router = Router()


router.get("/", getBreedHandler);
router.get('/:id', getByIdHandler)



module.exports = router