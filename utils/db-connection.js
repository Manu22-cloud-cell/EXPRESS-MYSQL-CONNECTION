const {Sequelize}=require('sequelize');

const sequelize = new Sequelize('testdb','root','252582',{
    host:"localhost",
    dialect:"mysql"
});

(async ()=>{
try{
    await sequelize.authenticate();
    console.log("Connection to the Database has been created")
} catch(error){
    console.log(error);
}})(); //Immediately invoked function expression(IIFE FUNCTIONS)

module.exports=sequelize;
// const mysql=require('mysql2');

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'252582',
//     database:'testdb'
// });

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Connection has been created");

//     const creationQuery=`create table IF NOT EXISTS Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50),
//     email VARCHAR(50)
//     )`

//     connection.execute(creationQuery,(err)=>{
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("Table is created")
//     })
// })
// module.exports=connection;

module.exports=sequelize;