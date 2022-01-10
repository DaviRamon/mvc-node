const Task = require('../models/Task')


// responsável apenas por mostrar a pagina de  criação das tarefas. 
module.exports = class TaskController {
    static createTask(req, res) {
        res.render('task/create')
    }

}

