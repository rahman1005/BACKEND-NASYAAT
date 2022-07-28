import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getLembaga, postLembaga, putLembaga, deleteLembaga, getLembagaByemail, getLembagaByPassword, getLembagaById} from "../controllers/lembaga.js";
import { getCategory,postCategory, putCategory, deleteCategory } from "../controllers/category.js";
import { getEvents, postEvent,getEventById, putEvent, deleteEvent, getEventsByUAI, getEventsByORMAWA, getEventsByUKKM, getEventsByLembaga, getEventsByDate} from "../controllers/events.js";
import { getAdmin,postAdmin, getAdminByUsername, getAdminByPassword } from "../controllers/admin.js";
import { getDeskripsi, postDeskripsi, putDeskripsi, deleteDeskripsi} from "../controllers/aboutUs.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import multer from "multer";
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './assets');
    },
    filename: function(req,file, cb){
        cb(null, `${file.fieldname}-${Date.now()}`)
    }
});
const upload = multer({storage:storage})

const router = express.Router();

router.get('/user', verifyToken, getUsers);
router.post('/user', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token',refreshToken);
router.get('/lembaga', getLembaga);
router.post('/lembaga', postLembaga);
router.put('/lembaga/:id', putLembaga);
router.delete('/lembaga/:id', deleteLembaga);
router.get('/category',getCategory);
router.post('/category',postCategory);
router.put('/category/:id',putCategory);
router.delete('/category/:id',deleteCategory);
router.get('/events',getEvents);
router.get('/eventsuai',getEventsByUAI);
router.get('/eventsormawa',getEventsByORMAWA);
router.get('/eventsukkm',getEventsByUKKM);
router.get('/eventslembaga/:lembagaId',getEventsByLembaga);
router.get('/events/:id',getEventById);
router.delete('/events/:id',deleteEvent);
router.post('/events', upload.single('Image'), postEvent);
router.put('/events/:id', upload.single('Image'), putEvent);
router.get('/eventbydate/:tanggal',getEventsByDate);
router.get('/admin', getAdmin);
router.post('/admin',postAdmin);
router.get('/lembaga/:emailLembaga', getLembagaByemail);
router.get('/lembagaps/:password', getLembagaByPassword);
router.get('/lembagaid/:id', getLembagaById);
router.get('/admin/:username',getAdminByUsername);
router.get('/adminps/:password', getAdminByPassword);
router.get('/aboutus', getDeskripsi);
router.post('/aboutus', postDeskripsi);
router.put('/aboutus/:id', putDeskripsi);
router.delete('/aboutus', deleteDeskripsi);



export default router;
