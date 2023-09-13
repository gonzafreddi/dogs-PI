const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`;

const getBreedController = async () => {
    try {
     // Esperar la respuesta usando "await"
     const apiResponse = await axios.get(URL)
     const apiInfo = await apiResponse.data.map(e=>{
        return{
            id: e.id,
            name: e.name,
            breed_group: e.breed_group,
            temperament: e.temperament,
            life_span: e.life_span,
            height: e.height.metric,
            weight: e.weight.metric,
            image: `https://cdn2.thedogapi.com/images/${e.reference_image_id}.jpg`,
            description: e?.description
        }
     })  
        
        
      // Enviar los datos obtenidos en la respuesta
      return apiInfo
    } catch (error) {
        console.log("error en el controller")
    }
}

module.exports = getBreedController
