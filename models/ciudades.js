const Sequelize = require('sequelize');
const Consola = (sequelize) => {
    sequelize.define('ciudades', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        ciudad: {
            type: Sequelize.STRING,
            allowNull: false
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