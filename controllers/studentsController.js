const db=require('../utils/db-connection');
const Student=require('../models/students')

const addEntries= async (req,res)=>{
    try{
        const {email,name}=req.body;
        const student= await Student.create({
            email:email,
            name:name
        });
        res.status(201).send(`Student with name: ${name} is created`)
    } catch(error){
        res.status(500).send('Unable to make any entry'); 
    }
}

const updateEntry= async (req,res)=>{
    try {
    const {id}=req.params;
    const {name}=req.body;

    const student= await Student.findByPk(id);
    if(!student){
        res.status(404).send("Student not found");
    }
    student.name=name;
    await student.save();
    res.status(200).send("Student has been updated"); 
    } catch (error) {
        console.log(error);
        res.status(500).send("Student cannot be updated");
    }
}

const deleteEntry= async (req,res)=>{
    try {
        const {id}=req.params;
        const student=await Student.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send("Student not found");
        }
        res.status(200).send("Student is deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error encountered while deleting");
    }
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}