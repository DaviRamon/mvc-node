const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)  //http://localhost:3000/tasks/add

router.post('/add', TaskController.createTaskSave) // salva os dados do post

router.post('/remove', TaskController.removeTask)

router.get('/edit/:id', TaskController.updateTask)

router.post('/edit', TaskController.updateTaskPost)

router.post('/updatestatus', TaskController.toggleTaskStatus) // toggle = alternar

router.get('/', TaskController.showTasks) //http://localhost:3000/tasks

module.exports = router