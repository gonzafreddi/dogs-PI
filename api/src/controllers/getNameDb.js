const {Dog, Temperaments} = require ("../db")
const getNameDb = async (name) => {
    try {
        console.log(name)
        const dog = await Dog.findOne({
            where: {
                name: name
            },
            include: [
                {
                    model: Temperaments,
                    attributes: ["name"],
                    through: {attributes:[]}
                },
            ],
        });
        return dog 
    } catch (error) {
        console.error("Error en la función getNameDb:", error);
        throw new Error("Ocurrió un error al buscar en la base de datos.");
    }
};


module.exports = getNameDb