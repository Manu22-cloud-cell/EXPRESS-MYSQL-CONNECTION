const express=require('express');
const router=express.Router();
const studentsController=require('../controllers/studentsController');

router.post("/add",studentsController.addEntries);
router.put("/update/:id",studentsController.updateEntry);
router.delete("/delete/:id",studentsController.deleteEntry);

module.exports=router;