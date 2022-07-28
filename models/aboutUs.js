import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const AboutUs = db.define('aboutus',{
    deskripsi:{
        type: DataTypes.TEXT,
        allowNull:false
    }
},{
    freezeTableName:true
});
export default AboutUs;