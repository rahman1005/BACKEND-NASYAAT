import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;


const Category = db.define('category',{

    categoryName:{
        type: DataTypes.STRING,
        allowNull:false
      }, 
},{
    freezeTableName:true
});

export default Category;