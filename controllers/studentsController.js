const db=require('../utils/db-connection');
const Student=require('../models/students');
const IdentityCard=require('../models/identityCard');
const Department=require('../models/department');

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

const addingValuesToStudentsAndIdentityTable= async (req,res)=>{
    try {
        const student= await Student.create(req.body.student);
        const idCard= await IdentityCard.create({
            ...req.body.identityCard,
            newStudentId:student.id
        })
        res.status(201).json({student,idCard})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const addingValuesToStudentsAndDepartmentTable= async (req,res)=>{
    try {
        const department= await Department.create(req.body.department);
        const student=await Student.create({
            ...req.body.student,
            departmentId:department.id
        })
        res.status(201).json({department,student})
        
    } catch (error) {
        res.status(500).json({error:error.message})
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
    deleteEntry,
    addingValuesToStudentsAndIdentityTable,
    addingValuesToStudentsAndDepartmentTable
}