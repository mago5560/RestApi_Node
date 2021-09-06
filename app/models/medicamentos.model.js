module.exports = (sequelize, Sequelize) => {
    const Medicamentos = sequelize.define("medicamentos", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      activo: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Medicamentos;
  };