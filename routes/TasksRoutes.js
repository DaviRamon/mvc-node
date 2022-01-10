const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)  //http://localhost:3000/tasks/add

router.post('/add', TaskController.createTaskSave) // salva os dados do post

router.get('/', TaskController.showTasks) //http://localhost:3000/tasks

module.exports = router