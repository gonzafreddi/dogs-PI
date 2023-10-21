const getTemperamentsController = require("../controllers/getTemperamentsController")
const temperamentHandler = async(req, res)=>{
  console.log("entro al handler")
    try {
        const response = await getTemperamentsController()
        console.log("handleeer",response)
      return  res.status(200).send(response)
    } catch (error) {
      return res.status(400).send(error.message)
    }
}

module.exports = temperamentHandler
