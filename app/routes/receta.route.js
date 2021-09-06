module.exports = app => {
    const control = require("../controllers/receta.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", control.create);
  
    // Retrieve all 
    router.get("/", control.findAll);
  
  
    // Retrieve a single  with id
    router.get("/:id", control.findOne);
  
    // Retrieve a single  with idFichaMedica
    router.get("/:idFichaMedica", control.findIdFichaMedica);

    // Retrieve a single  with idMedicamento
    router.get("/:idMedicamento", control.findIdMedicamento);

    // Update a  with id
    router.put("/:id", control.update);
  
    // Delete a  with id
    router.delete("/:id", control.delete);
  
    // Delete all 
    router.delete("/", control.deleteAll);
  
    app.use("/api/receta", router);
  };