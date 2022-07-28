import AboutUs from "../models/aboutUs.js";

export const getDeskripsi = async (req, res)=>{
    try{
        const aboutUs = await AboutUs.findAll();
        res.json({aboutUs})
    }catch(error){
        console.log({msg:"data tidak ditemukan"})
    }
}
export const postDeskripsi = async (req, res)=>{
    const{deskripsi}=req.body
    try{
        const aboutUs = await AboutUs.create({
            deskripsi:deskripsi
        })
        res.json({aboutUs})
    }catch(error){
        console.log({msg:"data tidak ditemukan"})
    }
}
export const putDeskripsi = async (req,res)=>{
    const id = req.params.id;
    let aboutUs = await AboutUs.findByPk(id);
    if(!aboutUs){
        return res.json({msg:"data tidak ditemukan"})
    }
    const {deskripsi}= req.body;

        await AboutUs.update({
            deskripsi:deskripsi
        },{
            where:{
                id:id
            }
        })
        res.json({msg:"data berhasil diperbaharui"});
}
export const deleteDeskripsi = async (req,res)=>{
    const id = req.params.id;
    let aboutUs = await AboutUs.findByPk(id);
    if(!aboutUs){
        return res.json({msg:"data tidak ditemukan"})
    }
    await aboutUs.destroy();
    res.json({msg:"data berhasil dihapus"});
};