const Sequelize = require('sequelize');
const sequelize = new Sequelize('AlexisyMaxine', 'user4', 'root', {
    dialect: 'mysql',
    host: '18.234.222.26',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})
const Usuario = sequelize.define('cudades', {
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
    }
})

sequelize.sync()
    .then(resultado => {
        console.log('Conexión exitosa')
        Usuario.create({
                ciudad: "México",
                pais: "México",
                descripcion: "Ángel de la independencia",
                contador: 0
            })
            .then(resultado => console.log("Registro Exitoso"))
            .catch(error => console.log("Usuario existente" + error))

        sequelize.query("SELECT ciudad FROM ciudades where pais='México'", {
                type: Sequelize.QueryTypes.SELECT
            }).then(usuario => {
                console.log(usuario)
            })
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error))