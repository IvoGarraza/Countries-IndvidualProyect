const { DataTypes } = require('sequelize');

module.exports= (sequelize) =>{
    sequelize.define('activity',{
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name:{
            type: DataTypes.STRING
        },
        difficulty:{
            type: DataTypes.INTEGER
        },
        duration:{
            type: DataTypes.INTEGER
        },
        season:{
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno','Primavera')
        }
    },
    {
        timestamps:false
    })
}