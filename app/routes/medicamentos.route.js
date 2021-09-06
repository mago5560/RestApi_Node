module.exports = app => {
    const control = require("../controllers/medicamentos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", control.create);
  
    // Retrieve all 
    router.get("/", control.findAll);
  
    // Retrieve all published 
    router.get("/activo", control.findAllActivo);
  
    // Retrieve a single  with id
    router.get("/:id", control.findOne);
  
    // Update a  with id
    router.put("/:id", control.update);
  
    // Delete a  with id
    router.delete("/:id", control.delete);
  
    // Delete all 
    router.delete("/", control.deleteAll);
  
    app.use("/api/medicamento", router);
  };