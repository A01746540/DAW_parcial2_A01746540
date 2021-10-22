const Sequelize = require('sequelize');
const Ciudad = (sequelize) => {
    sequelize.define('ciudades_A01746540', {
        /*id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },*/
        ciudad: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        pais: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contador: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })
}
module.exports = Ciudad