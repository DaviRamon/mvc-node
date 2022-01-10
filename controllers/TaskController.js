const Task = require('../models/Task')


// responsável apenas por mostrar a pagina de  criação das tarefas. 
module.exports = class TaskController {


    static createTask(req, res) {
        res.render('tasks/create') 
    }




    static async createTaskSave(req, res) {
    
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)
        res.redirect('/tasks')

    }



    static async removeTask(req, res) {

        const id = req.body.id

        await Task.destroy({ where: { id: id } })

        res.redirect('/tasks')

    }



    static async updateTask(req, res) {

        const id = req.params.id
        const task = await Task.findOne({ where: { id: id }, raw: true })
        res.render('tasks/edit', { task }) // esse que será editado dentro da tag do HTML edit.handlebars {{task.....}}
    }




    static async updateTaskPost(req, res) {
        const id = req.body.id // vai no formulário então é req.body

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task, { where: { id: id } })
        res.redirect('/tasks')
    }
    



    static async toggleTaskStatus(req, res) {
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false,  // se a requisição vem 0(false), troca para TRUE, do contrário FALSE
        }

        await Task.update(task, {where: { id: id } })
        res.redirect('/tasks')
    }


    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})
        res.render('tasks/all', {tasks}) //http://localhost:3000/tasks
    }
}

