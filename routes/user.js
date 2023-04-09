const path = require('path');
const express = require('express');

const userController = require('../controllers/user')
const router = express.Router();





router.post('/user/add-user',userController.postUser)

router.get('/user/get-user', userController.getUser)

router.delete('/user/delete-user/:id', userController.deleteUser)
router.get('/', userController.getback)

module.exports = router;