import Lembaga from "../models/lembaga.js";

export const getLembaga = async (req, res)=>{
    try{
        const lembaga = await Lembaga.findAll();
        res.json(lembaga)
    }catch(error){
        console.log(error)
    }
};
export const getLembagaById = async (req, res)=>{
    const id = req.params.id
    try{
        const lembaga = await Lembaga.findByPk(id)
        res.json([lembaga])
    }catch(error){
        console.log(error)
    }
};
export const getLembagaByemail = async (req, res)=>{
    const email = req.params.emailLembaga
    try{
        const lembaga = await Lembaga.findAll({
            where:{
                emailLembaga:email
            }
        })
        res.json(lembaga)
    }catch(error){
        console.log(error)
    }
};
export const getLembagaByPassword = async (req, res)=>{
    const password = req.params.password
    try{
        const lembaga = await Lembaga.findAll({
            where:{
                password:password
            }
        })
        res.json(lembaga)
    }catch(error){
        console.log(error)
    }
};

export const postLembaga = async (req, res)=>{
    const { lembagaName, categoryId, emailLembaga, password} = req.body;
    try{
      const lembaga=  await Lembaga.create({
            lembagaName:lembagaName,
            categoryId:categoryId,
            emailLembaga:emailLembaga,
            password:password
        });
        res.json({msg:"data berhasil dimasukan", data:lembaga});
    }catch(error){
        console.log(error);
    }
};

export const putLembaga = async (req, res)=>{
    const id = req.params.id;
    let lembaga = await Lembaga.findByPk(id);
    if(!lembaga){
        return res.json({msg:"data tidak ditemukan"}) 
    }
    const { lembagaName, categoryId, emailLembaga, password} = req.body;
 
        await Lembaga.update({
            lembagaName:lembagaName,
            categoryId:categoryId,
            emailLembaga:emailLembaga,
            password:password
        },{
            where:{
                id:id
            }
        })
        res.json({msg:"data berhasil diperbaharui"});
};


export const deleteLembaga = async (req, res)=>{
    const id = req.params.id;
    let lembaga = await Lembaga.findByPk(id);
    if(!lembaga){
        return res.json({msg:"data tidak ditemukan"});
    }
    await lembaga.destroy();
    res.json({msg:"data berhasil dihapus"});
};