import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;
const Events= db.define('events',{
    lembagaId:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
    CategoryId:{ 
        type: DataTypes.INTEGER,
        allowNull: false
      }, 
    nameEvent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lembagaName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link_pendaftaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link_instagram: {
        type: DataTypes.STRING,
        allowNull: false

    },
    tanggal:{
        type: DataTypes.DATEONLY,
        allowNull:false
      },
    waktu_mulai:{
        type: DataTypes.STRING,
        allowNull:false
      },
    waktu_selesai:{
        type: DataTypes.STRING,
        allowNull:false
      },
    tempat: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    Image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export default Events;