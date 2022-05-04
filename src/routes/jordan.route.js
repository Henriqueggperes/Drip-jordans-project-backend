const route = require("express").Router();
const controllerBoots = require("../controllers/jordan.controller");
const {idValidation, objectBodyValidation} = require('../middlewares/boot.middleware')

route.get("/all-boots",controllerBoots.findAllBootsController);
route.get("/find-boot/:id", idValidation, controllerBoots.findByIdBootController);
route.post('/create-boot', objectBodyValidation ,controllerBoots.createBootController);
route.put('/update-boot/:id',idValidation, objectBodyValidation ,controllerBoots.updateBootController);
route.delete('/delete-boot/:id',idValidation ,controllerBoots.deleteBootController);
module.exports = route;
