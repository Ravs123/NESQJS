const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    database:'mydb',
    user:'nivi',
    password:'mypassword'

});

connection.connect((err)=>{
    if(err) throw new err;
    console.log(`db connected`);
    
})

module.exports = connection

//This is Db connection 