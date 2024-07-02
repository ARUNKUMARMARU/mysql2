const { createConnection } = require('mysql');
const app = require('./app');
const config = require('./config');

app.listen(config.PORT, ()=>{
    console.log(`Server connected port on ${config.PORT}`);
   try{
    config.pool.connect((error)=>{
        if(error){
            console.log(error.message)
        }else{
            console.log('Server connected to MySQL database')
        }
    })
   }catch(error){
    console.error("Error :", error)
   }
});

