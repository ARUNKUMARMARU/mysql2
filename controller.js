const config = require('./config');
const bcrypt = require('bcrypt');
const db = config.pool;
const mysql = require('mysql')

const controller = {
    sigup : async (req,res)=>{
    const {email,name, mobile_number, password} = req.body;
    const paswordhash = await bcrypt.hash(password,10);    
    const query = 'INSERT INTO customer (email,name, mobile_number, password) VALUES (?,?,?,?)';
    db.query(query, [email,name, mobile_number, paswordhash], (error, result)=>{
        if(error){
            console.error('Error :', error);
            res.status(500).json({'Error :' : error})
        }else{
            console.log('Data Stored  to mysql database');
            res.status(200).json({Message : 'Data Stored  to mysql database',result})
        }
    })
},

signin : (req,res)=>{
    const {email, password} = req.body;
    const sanitizedEmail = mysql.escape(email);
    const query = 'select * from customer where email = ? ';
    db.query(query, [email],(error, result)=>{
        console.log(result)
    })
}
}

module.exports = controller;