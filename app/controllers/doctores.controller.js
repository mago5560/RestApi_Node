const db = require("../models");
const Doctor = db.doctores;
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
  if (!req.body.modulo) {
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
  const doctor = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    modulo: req.body.modulo,
    activo: req.body.activo ? req.body.activo : true
  };

  // Save  in the database
  Doctor.create(doctor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Doctor."
      });
    });
};

// Retrieve all Doctores from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre  ;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Doctor.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving doctores."
      });
    });
};

// Find a single  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doctor.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Doctor with id=" + id
      });
    });
};

// Update a  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Doctor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doctor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Doctor with id=${id}. Maybe Doctor was not found or req.body is empty!`
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

  Doctor.destroy({
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
  Doctor.destroy({
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

// find all published 
exports.findAllActivo = (req, res) => {
    Doctor.findAll({ where: { activo: true } })
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
