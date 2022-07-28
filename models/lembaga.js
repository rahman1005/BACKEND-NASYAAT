import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const Lembaga = db.define('lembaga', {

    lembagaName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      categoryId:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      emailLembaga:{
        type:DataTypes.STRING,
        allowNull:false
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      },
},
{
    freezeTableName:true
});

export default Lembaga;