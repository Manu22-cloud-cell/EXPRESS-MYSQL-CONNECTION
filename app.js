const express=require('express');
const db=require('./utils/db-connection');
const studentsRoutes=require('./routes/studentsRoutes')

//models
require('./models') //all files are imported from models and associations are declared in the table

const app=express();

app.use(express.json());

app.use("/students",studentsRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running');
   })
}).catch((err)=>{
    console.log(err)
})

