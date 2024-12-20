const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/userRoute');
const errorMiddleWare = require('./middlewareServices/errorHandling');


require('dotenv').config();


const app = express();
const PORT = 3000;

// const dbConnect = require('./dbConfig/database');

app.use(bodyParser.json());

app.use('/',routes);
app.use(errorMiddleWare);




// app.get('/',(req,res)=>{
//     let sqlSelect = "SELECT * FROM people";
//     dbConnect.query(sqlSelect,function(err,results){
//         if(err) throw err;
//         res.send(results)
//     })
// })



app.listen(PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
    // dbConnect.connect(function(err){
    //     if(err) throw err;
    //     console.log('connect to Database');
        
    // })
    
})