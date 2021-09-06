module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define("pacientes", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      activo: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Pacientes;
  };