const db = require("../models");
const Pacientes = db.pacientes;
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
  if (!req.body.apellido) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.direccion) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.telefono) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create 
  const paciente = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    activo: req.body.activo ? req.body.activo : true
  };

  // Save  in the database
  Pacientes.create(doctor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pacientes."
      });
    });
};

// Retrieve all Pacientes from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre  ;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Pacientes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pacientes."
      });
    });
};

// Find a single  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pacientes.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pacientes with id=" + id
      });
    });
};

// Update a  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pacientes.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pacientes was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pacientes with id=${id}. Maybe Pacientes was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Doctor with id=" + id
      });
    });
};

// Delete a  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pacientes.destroy({
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
    Pacientes.destroy({
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
    Pacientes.findAll({ where: { activo: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doctor."
      });
    });
};
