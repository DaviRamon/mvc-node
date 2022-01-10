const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/TasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// traz as informações do body no json abaixo // midleweare
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use(express.static('public')) // arquivos estáticos
app.use('/tasks', tasksRoutes) // chama as rotas 









// aplicação não funciona sem as tabelas criadas.
conn
    .sync()  
    //.sync({force: true}) /*recria as tabelas. CUIDADO APAGA TODOS OS DADOS*/ 
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err)) 