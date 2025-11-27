const express=require('express');
const db=require('./utils/db-connection');
const studentsRoutes=require('./routes/studentsRoutes')

//import the models
const studentModel=require('./models/students')

const app=express();

app.use(express.json());

app.use("/students",studentsRoutes);

db.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running');
   })
}).catch((err)=>{
    console.log(err)
})

