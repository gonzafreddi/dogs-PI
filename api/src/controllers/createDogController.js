const {Dog, Temperaments} = require("../db.js")


const createDogController = async(dog)=>{
    let {name,  image,  pesoMin,pesoMax,altoMin,altoMaxim, years, temperaments} = dog
    try {
       
        let finDog = await Dog.findOne({where:{name}})
        if(finDog)return "ya exite el Perro"
       
        const newDog = await Dog.create({
            name, 
            image, 
            altoMin, 
            altoMaxim,
            pesoMax,
            pesoMin, 
            years,
            
        })
        console.log(temperaments)
  
        const selectedTemperaments = await Temperaments.findOne({
                    where: { name: temperaments }
                });
        console.log(selectedTemperaments)
            
        temperaments.forEach(async (t) => {
            let temperamentDB = await Temperaments.findAll({
              where: { name: t },
            });
            newDog.addTemperament(temperamentDB);
          });
    
        return newDog
    } catch (error) {
       return error.message
    }
}

module.exports = createDogController













































        // if (temperaments && temperaments.length > 0) {
        //   
        //     console.log(selectedTemperaments)
        //     await newDog.addTemperament(selectedTemperaments);
        // }

// temperaments.forEach(async(e) => {
//     let temperamentsDb = await Temperaments.findAll({name:e})
//     await newDog.addTemperaments(temperamentsDb)
// });

        // if (temperaments && temperaments.length > 0) {
        //     const selectedTemperaments = await Temperaments.findAll({
        //         where: { name: temperaments }
        //     });
            
        //     // Asegúrate de que el método 'addTemperament' esté correctamente definido
        //     await newDog.addTemperaments(selectedTemperaments);
        // }

              // temperaments.array.forEach(async element => {
        //     const selectedTemperaments = await Temperaments.findAll({
        //         where: { name: element }
        //     });
        //     await newDog.addTemperament(selectedTemperaments)
        // });


            // await newDog.addTemperaments(selectedTemperaments)
    //    if(selectedTemperaments){
    //     await newDog.addTemperament(selectedTemperaments)
    //    }