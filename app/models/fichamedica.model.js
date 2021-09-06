module.exports = (sequelize, Sequelize) => {
    const FichaMedica = sequelize.define("fichamedica", {
      fechaingreso: {
        type: Sequelize.STRING
      },
      fechaegreso: {
        type: Sequelize.STRING
      },
      idDoctor: {
        type: Sequelize.INTEGER
      },
      idPaciente: {
        type: Sequelize.INTEGER
      }
    });
  
    return FichaMedica;
  };