module.exports = app => {
    const control = require("../controllers/fichamedica.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", control.create);
  
    // Retrieve all 
    router.get("/", control.findAll);
  
  
    // Retrieve a single  with id
    router.get("/:id", control.findOne);
  
    // Retrieve a single  with idDoctor
    router.get("/:idDoctor", control.findIdDoctor);

    // Retrieve a single  with idPaciente
    router.get("/:idPaciente", control.findIdPaciente);

    // Update a  with id
    router.put("/:id", control.update);
  
    // Delete a  with id
    router.delete("/:id", control.delete);
  
    // Delete all 
    router.delete("/", control.deleteAll);
  
    app.use("/api/fichamedica", router);
  };