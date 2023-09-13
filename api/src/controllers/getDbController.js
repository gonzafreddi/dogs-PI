const {Dog, Temperaments}= require("../db")


const getDbController = async()=>{
    try {
        const dogs = await Dog.findAll({
          include: [
              {
                  model: Temperaments,
                  attributes: ["name"],
                  through: {attributes:[]}
              },
          ],
      });
        return dogs
    } catch (error) {
      return (error.message)  
    }
}



module.exports = getDbController