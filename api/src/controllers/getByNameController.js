const axios = require("axios")
const {Dog} = require("../db.js")
const getNameDb = require("./getNameDb.js")

const getByNameController = async(name)=>{
   
    try {


        let finDb = await getNameDb(name)
        console.log(finDb)
      
            const URL = `https://api.thedogapi.com/v1/breeds/search?q=${name}`
            const apiResponse = await axios(URL)
            const apiInfo = apiResponse.data.map(e=>{
                return{
                    id: e.id,
                    image: `https://cdn2.thedogapi.com/images/${e.reference_image_id}.jpg`,
                    name: e.name,
                    breed_group: e.breed_group,
                    temperament: e.temperament,
                    life_span: e.life_span,
                    height: e.height.metric,
                    weight: e.weight.metric,
                    description: e?.description
                }
             })
           console.log(apiInfo);
           
         if(finDb[0] === null && apiInfo.length === 0 ){
            console.log("entre");
            return "perro no encontrado"
         }else{
            let allData  =  [...apiInfo].concat(finDb)
            console.log("else log");
            return allData
         }
             
        

     
    } catch (error) {
        return "dog no encontrado"
    }
}



module.exports = getByNameController