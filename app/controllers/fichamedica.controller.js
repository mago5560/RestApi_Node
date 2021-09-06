const db = require("../models");
const FichaMedica = db.fichamedica;
const Op = db.Sequelize.Op;

// Create and Save a new 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.idDoctor) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.idPaciente) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create 
  const fichamedica = {
    fechaingreso: req.body.fechaingreso,
    fechaegreso: req.body.fechaegreso,
    idDoctor: req.body.idDoctor,
    idPaciente: req.body.idPaciente
  };

  // Save  in the database
  FichaMedica.create(fichamedica)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the FichaMedica."
      });
    });
};

// Retrieve all Doctores from the database.
exports.findAll = (req, res) => {
  FichaMedica.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FichaMedica."
      });
    });
};

// Find a single  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  FichaMedica.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving FichaMedica with id=" + id
      });
    });
};

exports.findIdPaciente = (req, res) => {
    const _idPaciente = req.params.idPaciente;
    var condition = { idpaciente: _idPaciente } ;

    FichaMedica.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving FichaMedica with id=" + id
        });
      });
  };

  exports.findIdDoctor = (req, res) => {
    const _idDoctor = req.params.idDoctor;
    var condition = { idDoctor: _idDoctor } ;

    FichaMedica.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving FichaMedica with id=" + id
        });
      });
  };


// Update a  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  FichaMedica.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "FichaMedica was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update FichaMedica with id=${id}. Maybe FichaMedica was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating FichaMedica with id=" + id
      });
    });
};

// Delete a  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  FichaMedica.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doctor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Doctor with id=${id}. Maybe Doctor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doctor with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
    FichaMedica.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Doctor were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Doctor."
      });
    });
};

