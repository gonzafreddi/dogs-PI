const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`;
const getBreedController = require("./getBreedController")
const {Temperaments} = require("../db.js")



const getTemperamentsController = async()=>{
try {
 const responseApi = await getBreedController()
 let temperament = await responseApi.map(e=> e.temperament)
 let combinedString = temperament.join(", ")
 const uniqueWordsSet = new Set(combinedString.split(", "));
 const uniqueWordsArray = [...uniqueWordsSet];

 for(const nameTemp of uniqueWordsArray){
    await Temperaments.findOrCreate({where:{name: nameTemp}})
 }


 return uniqueWordsArray
} catch (error) {
    return error.message
}
}


module.exports = getTemperamentsController