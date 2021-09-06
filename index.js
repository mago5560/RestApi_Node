const express = require('express');
const bodyParser = require('body-parser');
const cors= require("cors");
const app = express();

var corsOptions = {
    origin: 'https://localhost:8081'
};

app.use (cors(corsOptions));
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const db= require('./app/models');
db.sequelize.sync();

app.get("/", (req,res) => {
    res.json({message:"Bienvenido Seminario UMG API REST"});
});

require('./app/routes/tutorial.route')(app);
require('./app/routes/doctores.route')(app);
require('./app/routes/pacientes.route')(app);
require('./app/routes/medicamentos.route')(app);
require('./app/routes/fichamedica.route')(app);
require('./app/routes/receta.route')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});

