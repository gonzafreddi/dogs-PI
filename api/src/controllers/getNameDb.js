const {Dog, Temperaments} = require ("../db")
const { Op } = require("sequelize");

const getNameDb = async (name) => {
    try {
        console.log(name)
        const dog = await Dog.findOne({
            where: {
                name:{
                    [Op.like]: `%${name}%`, // utilizo Op.like para la búsqueda parcial
                }
            },
            include: [
                {
                    model: Temperaments,
                    attributes: ["name"],
                    through: {attributes:[]}
                },
            ],
        });
        return [dog]
    } catch (error) {
        console.error("Error en la función getNameDb:", error);
        throw new Error("Ocurrió un error al buscar en la base de datos.");
    }
};


module.exports = getNameDb