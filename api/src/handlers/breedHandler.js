// la funcion del handeler es:
// Unificar los datos 
// invocar al controler 
// devolver una respuesta
// --------IMPORTANTE----------->>>>>> EL HANDLER NUNCA INTRACTUA CON FUENTES EXTERNAS DE INFO de eso se encarga elñ controller

const getBreedController = require("../controllers/getBreedController")
const getByIdController = require("../controllers/getByIdController")

const getBreedHandler = async (req, res)=>{
   try {
    let apiResponse = await getBreedController()
    return res.status(200).send(apiResponse)
   } catch (error) {
    return res.status(400).send("error en el handler")
   }
}

const getByIdHandler = async(req, res)=>{
    let {id} = req.params
    
    try {
        console.log(id,"consol log del handler")
        let apiResponse = await getByIdController(id)
        res.status(200).send(apiResponse)
    } catch (error) {
        res.status(400).send("hanler error getByIDhandler")
    }
}

module.exports = { getBreedHandler, getByIdHandler }