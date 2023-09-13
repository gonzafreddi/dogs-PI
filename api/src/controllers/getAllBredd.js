const getDbController = require("../controllers/getDbController")
const getBreedController = require("../controllers/getBreedController")

const getAllBredd = async()=>{
   try {
    let dogsDb = await getDbController()
    let dogsApi = await getBreedController()

    let allDogs = [...dogsDb].concat(dogsApi)
   return allDogs;
   } catch (error) {
    return error
   } 
}

module.exports = getAllBredd