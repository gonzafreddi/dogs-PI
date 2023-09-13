const axios = require("axios")
const getBreedController = require("./getBreedController")
const getTemperamentsController = require("./getTemperamentsController")
let allDogs = [];
//funcion autoinvocable cuando se levanta el servidor para llenar el array asi trabajar desde ahi y no hacer multiples peticiones a la api
(async () => {
    try {
        allDogs = await getBreedController();

    } catch (error) {
        console.error("Error al obtener la lista de perros:", error);
    }
})();

const getById = async(id)=>{
 try {
    const dogId = allDogs.find(dog => dog.id == (id));
    if (dogId) {
        return dogId; // Enviar el perro encontrado como respuesta
    } else {
        return "no hay perro con ese id"; // Perro no encontrado
    }
 } catch (error) {
    return error.message
 }
}



module.exports = getById