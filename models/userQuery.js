const db = require('../dbConfig/database');

exports.getAllUsers = function(callback){
    db.query('SELECT * FROM people',callback);
}

exports.getById = function(id,callback){
    db.query('SELECT * FROM people WHERE id = ?',[id],callback)
}

exports.addUser = function(newUser,callBack){
    db.query('INSERT INTO people SET ?',newUser,callBack)
}
