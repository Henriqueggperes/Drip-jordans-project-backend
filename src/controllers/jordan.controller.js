const mongoose = require("mongoose");
const BootsService = require("../services/jordan.service");

const findAllBootsController = async (req, res) => {
  const allBoots = await BootsService.findAllBootsService();
  res.send(allBoots);
};
const findByIdBootController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const chosenBoot = await BootsService.findByIdBootService(
    idParam
  );

  if (!chosenBoot) {
    return res.status(404).send({ message: "Personagem não encontrado" });
  }
  res.send(chosenBoot);
};

const createBootController = async (req, res) => {
  const boot = req.body;

  const newBoot = await BootsService.createBootService(
    boot
  );
  res.status(201).send(newBoot);
};

const updateBootController = async (req, res) => {
  const idParam = req.params.id;
  const editBoot = req.body;
  const updatedBoot = await BootsService.updateBootService(
    idParam,
    editBoot
  );
  res.send(updatedBoot);
};
const deleteBootController = async (req, res) => {
  const idParam = req.params.id;
  await BootsService.deleteBootService(idParam);
  res.send({ message: "Jordan deletado com sucesso!" });
};

module.exports = {
  findAllBootsController,
  findByIdBootController,
  createBootController,
  updateBootController,
  deleteBootController,
};
