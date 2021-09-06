module.exports = (sequelize, Sequelize) => {
    const Receta = sequelize.define("receta", {
      Fecha: {
        type: Sequelize.STRING
      },
      idMedicamento: {
        type: Sequelize.INTEGER
      },
      idFichaMedica: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      }
    });
  
    return Receta;
  };