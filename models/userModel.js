import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;


const Users = db.define('user', {
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    roleId:{
        type:DataTypes.INTEGER
    },
    refresToken:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName:true
});
export default Users;