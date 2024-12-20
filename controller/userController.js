const User = require('../models/userQuery');

exports.getAll = function(req,res){
    User.getAllUsers((err,getAll)=>{
        if(err) throw err;
        res.json(getAll)
    })
}

exports.getById = function(req,res){
    User.getById(req.params.id,(err,getId)=>{
        if(err) throw err;
        res.json(getId)
    })
}

exports.addUser = function(req,res){
    const newUser = {
        name:req.body.name,
        occupation:req.body.occupation,
        age:req.body.age
    };
    User.addUser(newUser,(err,result)=>{
        if(err) throw err;
        res.json({message:'New user added successfully'})
    })
}