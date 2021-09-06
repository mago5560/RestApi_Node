module.exports = (sequelize, Sequelize) => {
    const Doctores = sequelize.define("doctores", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      modulo: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Doctores;
  };