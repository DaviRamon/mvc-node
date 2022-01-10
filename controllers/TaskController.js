const Task = require('../models/Task')


// responsável apenas por mostrar a pagina de  criação das tarefas. 
module.exports = class TaskController {


    static createTask(req, res) {
        res.render('tasks/create')  //http://localhost:3000/tasks/add
    }

    static showTask(req, res) {
        res.render('tasks/all') //http://localhost:3000/tasks
    }
}

