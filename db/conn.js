const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mvcdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('connection successful')
    
} catch (error) {
    console.log(`Connection failed:', ${error}`)
    
}

module.exports = sequelize