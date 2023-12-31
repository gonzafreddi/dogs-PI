const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id : {
      type: DataTypes.UUID, // tipo de valor uuid
      defaultValue: DataTypes.UUIDV4, // genero el valor hexadecimal 
      allowNull: false,
      primaryKey:true
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false
    },
    altoMaxim: {
      type: DataTypes.STRING,
      allowNull:true
    },
    altoMin: {
      type: DataTypes.STRING,
      allowNull:false
    },
    pesoMin:{
      type: DataTypes.STRING,
      allowNull:false
    }, 
    pesoMax:{
      type: DataTypes.STRING,
      allowNull:false
    }, 
    years:{
      type: DataTypes.STRING,
      allowNull:false
    }
  });
};
