const { Router } = require('express');
const {getBreedHandler, getByName} = require("../handlers/breedHandler");
const {getByIdHandler}= require('../handlers/breedHandler');
const {postCreateDogHandler} = require("../handlers/breedHandler")
const {getDbBreed} = require("../handlers/breedHandler")
const {getAllDogs} = require("../handlers/breedHandler");
const {getDbName} = require("../handlers/breedHandler");
const router = Router()


router.get("/", getBreedHandler);
router.get('/:id', getByIdHandler)
router.get("/search/name", getByName) //http://localhost:3001/breed/search/name?name=name_breed
router.get("/api/db", getDbBreed)
router.get("/get/all", getAllDogs)
router.get("/db/name", getDbName)
router.post("/create", postCreateDogHandler)


module.exports = router