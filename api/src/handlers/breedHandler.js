// la funcion del handeler es:
// Unificar los datos 
// invocar al controler 
// devolver una respuesta
// --------IMPORTANTE----------->>>>>> EL HANDLER NUNCA INTRACTUA CON FUENTES EXTERNAS DE INFO de eso se encarga elñ controller

const getBreedController = require("../controllers/getBreedController")
const getByIdController = require("../controllers/getByIdController")
const getByNameController = require("../controllers/getByNameController")
const createDogController = require("../controllers/createDogController")
const getDbController = require("../controllers/getDbController")
const getAllBredd = require("../controllers/getAllBredd")
const getNameDb = require("../controllers/getNameDb")

const getBreedHandler = async (req, res)=>{
   try {
    let apiResponse = await getBreedController()
    return res.status(200).send(apiResponse)
   } catch (error) {
    return res.status(400).send(error.message)
   }
}

const getByIdHandler = async(req, res)=>{
    let {id} = req.params
    
    try {
        let apiResponse = await getByIdController(id)
       return res.status(200).send(apiResponse)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const getByName = async(req, res)=>{
    let {name} = req.query
    
    try {
        
        const responseApi = await getByNameController(name);
        console.log(responseApi);
        return res.status(200).send(responseApi);
        
    } catch (error) {
        return res.status(400).send("perro ni encontrado")
    }
}

const getDbBreed = async(req, res)=>{
    try {
        const responseDb = await getDbController()
        return res.status(200).send(responseDb)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
const getAllDogs = async(req, res)=>{
    try {
        const responseAll = await getAllBredd()
        return res.status(200).send(responseAll)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const getDbName = async(req, res)=>{
    let {name} = req.query
    try {
         const response = await getNameDb(name)
         return res.status(200).send(response)   
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
const postCreateDogHandler = async(req, res)=>{
    try {
       const dog = req.body

       const responseDog = await createDogController(dog)
       return res.status(200).send(responseDog)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
module.exports = { getBreedHandler, getDbName,getAllDogs ,getByIdHandler , getByName, postCreateDogHandler, postCreateDogHandler, getDbBreed}