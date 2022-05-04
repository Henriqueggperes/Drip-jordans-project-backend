

const jordans = require('../model/jordan')



const findAllBootsService = async () => {
  const boots = await jordans.find();
  return boots;
};

const findByIdBootService = async (idParam) => {
  const boots = await jordans.findById(idParam)
  return boots;
};
const createBootService = async (newBoot) => {
  const  createdBoot = await jordans.create(newBoot);
  return createdBoot;
};
const updateBootService = async (idParam, editBoot) => {
  const updatedBoot = await jordans.findByIdAndUpdate(idParam,editBoot)
  return updatedBoot;
};
const deleteBootService = async (idParam) => {
  return await jordans.findByIdAndDelete(idParam);
};

module.exports = {
  findAllBootsService,
  findByIdBootService,
  createBootService,
  updateBootService,
  deleteBootService,
};
