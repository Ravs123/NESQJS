//User routes module 

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get('/',userController.getAll);
router.get('/:id',userController.getById)
router.post('/',userController.addUser);

module.exports = router
