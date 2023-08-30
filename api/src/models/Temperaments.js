const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
      // defino el modelo
  sequelize.define('temperaments', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id : {
        type: DataTypes.UUID, // tipo de valor uuid
        defaultValue: DataTypes.UUIDV4, // genero el valor hexadecimal 
        allowNull: false,
        primaryKey:true
      }
    })}