const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.doctores = require("./doctores.model.js")(sequelize, Sequelize);
db.pacientes = require("./pacientes.model.js")(sequelize, Sequelize);
db.medicamentos = require("./medicamentos.model.js")(sequelize, Sequelize);
db.fichamedica = require("./fichamedica.model.js")(sequelize, Sequelize);
db.receta = require("./receta.model.js")(sequelize, Sequelize);


module.exports = db;