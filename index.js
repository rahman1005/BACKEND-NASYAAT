const express =require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser =require ("cookie-parser");
const db =require ("./config/Database.js");
const Users =require ("./models/userModel.js");
const category =require ("./models/category.js");
const Lembaga = require( "./models/lembaga.js");
const Events =require ("./models/events.js");
const Admin = require("./models/admin.js");
const AboutUs =require ("./models/aboutUs.js");
const router =require ("./routes/index.js");
dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log('Database Conneced..');
    await Users.sync();
    await category.sync();
    await Lembaga.sync();
    await Events.sync();
    await Admin.sync();
    await AboutUs.sync();
}catch(error){
    console.error(error);
}
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use('/assets', express.static('assets'));
app.listen()