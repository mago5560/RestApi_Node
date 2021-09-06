const db = require("../models");
const Receta = db.receta;
const Op = db.Sequelize.Op;

// Create and Save a new 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Fecha) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.idMedicamento) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.idFichaMedica) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create 
  const receta = {
    Fecha: req.body.Fecha,
    idMedicamento: req.body.idMedicamento,
    idFichaMedica: req.body.idFichaMedica,
    cantidad: req.body.cantidad
  };

  // Save  in the database
  Receta.create(receta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Receta."
      });
    });
};

// Retrieve all Receta from the database.
exports.findAll = (req, res) => {
    Receta.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Receta."
      });
    });
};

// Find a single  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Receta.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Receta with id=" + id
      });
    });
};

exports.findIdMedicamento = (req, res) => {
    const _idMedicamento = req.params.idMedicamento;
    var condition = { idMedicamento: _idMedicamento } ;

    Receta.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Receta with id=" + id
        });
      });
  };

  exports.findIdFichaMedica = (req, res) => {
    const _idFichaMedica = req.params.idFichaMedica;
    var condition = { idDoctor: _idFichaMedica } ;

    Receta.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Receta with id=" + id
        });
      });
  };


// Update a  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Receta.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Receta was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Receta with id=${id}. Maybe Receta was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Receta with id=" + id
      });
    });
};

// Delete a  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Receta.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Receta was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Receta with id=${id}. Maybe Receta was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Receta with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
    Receta.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Receta were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Receta."
      });
    });
};
