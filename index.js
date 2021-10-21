const express = require('express')
const path = require('path')
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

const sequelize = require('./utils/database')
app.use(express.json())
const ciudadesRoutes = require('./routes/ciudades')
app.use('/ciudades', ciudadesRoutes);

sequelize.sync()
    .then(
        app.listen(8084, () => {
            console.log("Servidor online en el puerto 8084")
        })
    )
    .catch(err => console.log(err))