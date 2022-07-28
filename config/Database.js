import { Sequelize } from "sequelize";
// const db = new Sequelize('u1713826_nasyaat-uai', 'u1713826_nasyaat-uai','h11tdx2wbm7l',{
//     host:"labifuai.com",
//     dialect: "mysql",
//     port:3306
// },{
//     dialectOptions: {
//         charset: 'utf8mb4_unicode_ci'
//       }
// });
const db = new Sequelize('nasyaat', 'root','',{
    host:"localhost",
    dialect: "mysql",
    port:3306
},{
    dialectOptions: {
        charset: 'utf8mb4_unicode_ci'
      }
});
export default db;
