const db = require("../models");
const Medicamentos = db.medicamentos;
const Op = db.Sequelize.Op;

// Create and Save a new 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.descripcion) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.cantidad) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create 
  const medicamento = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad,
    activo: req.body.activo ? req.body.activo : true
  };

  // Save  in the database
  Medicamentos.create(medicamento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Medicamentos."
      });
    });
};

// Retrieve all Pacientes from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre  ;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Medicamentos.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Medicamentos."
      });
    });
};

// Find a single  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Medicamentos.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Medicamentos with id=" + id
      });
    });
};

// Update a  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Medicamentos.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Medicamentos was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Medicamentos with id=${id}. Maybe Medicamentos was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Medicamentos with id=" + id
      });
    });
};

// Delete a  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Medicamentos.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Medicamentos was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Medicamentos with id=${id}. Maybe Medicamentos was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Medicamentos with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
    Medicamentos.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pacientes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Pacientes."
      });
    });
};

// find all published 
exports.findAllActivo = (req, res) => {
    Medicamentos.findAll({ where: { activo: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Medicamentos."
      });
    });
};
