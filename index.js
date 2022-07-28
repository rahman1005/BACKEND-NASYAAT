import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import Users from "./models/userModel.js";
import category from "./models/category.js";
import Lembaga from "./models/lembaga.js";
import Events from "./models/events.js";
import Admin from "./models/admin.js";
import AboutUs from "./models/aboutUs.js";
import router from "./routes/index.js";
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
app.listen(5000, ()=> console.log('server running at port 5000'))