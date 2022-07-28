import Category from "../models/category.js";

export const getCategory = async (req, res)=>{
    try{
        const category = await Category.findAll()
        res.json(category);
    }catch(error){
        console.log(error)
    }
};
export const getCategorybyId = async (req, res)=>{
    try{
        const category = await Category.findByPk(id)
        res.json(category);
    }catch(error){
        console.log(error)
    }
};
export const postCategory = async (req, res)=>{
    const {categoryName} =req.body;
    try{
        const category = await Category.create({
            categoryName:categoryName
        });
        res.json({msq:"data berhasil dimasukan", data:category})
    }catch(error){
        console.log(error)
    }
};
export const putCategory = async (req, res)=> {
    const id = req.params.id;
    let category = await Category.findByPk(id);
    if(!category){
        return res.json({msg:"data tidak ditemukan"});
    }
    const {categoryName} = req.body;
    await Category.update({
        categoryName:categoryName
    },{
        where:{
            id:id
        }
    });
    res.json({msg:"data berhasil diperbaharui"})
}
export const deleteCategory = async (req ,res)=>{
    const id = req.params.id;
    let category = await Category.findByPk(id);
    if(!category){
        return res.json({msg:"data tidak ditemukan"});
    }
    await category.destroy();
    res.json({msg:"data berhasil dihapus"});
}