import Events from "../models/events.js";

export const getEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.json({ events })
    } catch (error) {
        console.log(error)
    }
};
export const getEventsByDate = async (req, res)=>{
    const tanggal = req.params.tanggal
    try{
        const events = await Events.findAll({
            where:{
                tanggal:tanggal 
            }
        });
        res.json({events})
    }catch(error){
        console.log(error);
    }
};
export const getEventsByLembaga = async (req, res)=>{
    const lembagaId = req.params.lembagaId
    try{
        const events = await Events.findAll({
            where:{
                lembagaId:lembagaId
            }
        });
        res.json({events})
    }catch(error){
        console.log(error);
    }
};
export const getEventsByUAI = async (req, res) => {
    try {
        const events = await Events.findAll({
            where:{
                CategoryId:1
            }
        });
        res.json({ events })
    } catch (error) {
        console.log(error)
    }
};
export const getEventsByORMAWA = async (req, res) => {
    try {
        const events = await Events.findAll({
            where:{
                CategoryId:2
            }
        });
        res.json({ events })
    } catch (error) {
        console.log(error)
    }
};
export const getEventsByUKKM = async (req, res) => {
    try {
        const events = await Events.findAll({
            where:{
                CategoryId:3
            }
        });
        res.json({ events })
    } catch (error) {
        console.log(error)
    }
};
export const getEventById = async (req, res)=>{
    const id = req.params.id;
    try{
        const event = await Events.findByPk(id);
        res.json(event);
    }catch(error){
        console.log(error);
    }
}
export const postEvent = async (req, res) => {
    const { lembagaId, CategoryId, nameEvent, lembagaName, link_pendaftaran, link_instagram, tanggal, waktu_mulai, waktu_selesai, tempat, deskripsi } = req.body;
 
    try {
        const event = await Events.create({
            lembagaId: lembagaId,
            CategoryId: CategoryId,
            nameEvent: nameEvent,
            lembagaName: lembagaName,
            link_pendaftaran: link_pendaftaran,
            link_instagram: link_instagram,
            tanggal: tanggal,
            waktu_mulai: waktu_mulai,
            waktu_selesai: waktu_selesai,
            tempat: tempat,
            deskripsi: deskripsi,
            Image:req.file.path
        });
        res.json({ smg: "data berhasil dimasukan", data: event })
    } catch (error) {
        console.log(error);
    }
};

export const putEvent =async (req, res)=>{
    const id = req.params.id;
    let event = await Events.findByPk(id);
    if(!event){
        return res.json({msg:"data tidak ditemukan"});
    }
    const { lembagaId, CategoryId, nameEvent, lembagaName, link_pendaftaran, link_instagram, tanggal, waktu_mulai, waktu_selesai, tempat, deskripsi } = req.body;
        await Events.update({
            lembagaId: lembagaId,
            CategoryId: CategoryId,
            nameEvent: nameEvent,
            lembagaName: lembagaName,
            link_pendaftaran: link_pendaftaran,
            link_instagram: link_instagram,
            tanggal: tanggal,
            waktu_mulai: waktu_mulai,
            waktu_selesai: waktu_selesai,
            tempat: tempat,
            deskripsi: deskripsi,
            Image:req.file.path
        },{
            where:{
                id:id
            }
        });
        res.json({msg:"data berhasil diperbaharui"})
};

export const deleteEvent = async (req, res)=>{
    const id = req.params.id;
    let event = await Events.findByPk(id);

    if(!event){
        return res.json({msg:"data tidak ditemukan"});
    }
    await event.destroy();

    res.json({msg:"data berhasil dihapus"})
};


