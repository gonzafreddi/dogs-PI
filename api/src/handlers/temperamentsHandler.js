const getTemperamentsController = require("../controllers/getTemperamentsController")
const temperamentHandler = async(req, res)=>{
    try {
        const response = await getTemperamentsController()
      return  res.status(200).send(response)
    } catch (error) {
      return res.status(400).send(error.message)
    }
}

module.exports = temperamentHandler
