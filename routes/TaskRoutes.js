const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)  //http://localhost:3000/tasks/add
router.get('/', TaskController.showTask) //http://localhost:3000/tasks

module.exports = router