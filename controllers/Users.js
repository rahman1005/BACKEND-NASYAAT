import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res)=> {
    try{
        const users = await Users.findAll({
            attributes:['id','name', 'email','roleId']
        });
        res.json(users);
    }catch(error){
        console.log(error);
    }
};

export const Register = async (req, res)=>{
    const {name, email, password, roleId, confPassword} = req.body;
    if( password !== confPassword) return res.status(400).json({msg:"password dan konfirmasi password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const  hashPassword = await bcrypt.hash(password, salt);

    try{
        await Users. create({
            name:name,
            email:email,
            password:hashPassword,
            roleId: roleId
        });
        res.json({msg:"Register Berhasil"});
    }catch(error){
        console.log(error);
    }
};

export const Login = async(req,res)=>{
    try{
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const Match = await bcrypt.compare(req.body.password, user[0].password);
        if(!Match) return res.status(400).json({msg:"Password Salah"});
        const userId = user[0].id;
        const name = user[0].name;
        const email =user[0].email;
        const roleId = user[0].roleId;
        const accessToken = jwt.sign({userId,name,email,roleId}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId,name,email,roleId}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        await Users.update({refresToken:refreshToken},{
            where:{
                id:userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            masAge: 24 * 60 * 60 * 1000,
            // secure: true //bila menggunakan https

        });
        res.json({accessToken})

    }catch(error){
        res.status(404).json({msg:"Email tidak ditemukan..."})
    }
};

export const Logout = async(req,res)=>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresToken: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);   
    const userId =user[0].id;
    await Users.update({refresToken:null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
