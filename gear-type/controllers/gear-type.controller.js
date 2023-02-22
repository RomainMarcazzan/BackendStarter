import * as gearTypeService from '../services/gear-type.service.js';

export const createGearTypeCtrl = async (req, res) => {
  try {
    const newGearType = await gearTypeService.createGearType({
      name: req.body.name,
    });
    return res.status(200).json(newGearType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllGearTypesCtrl = async (req, res) => {
  try {
    const gearTypes = await gearTypeService.getAllGearTypes();
    return res.status(200).json(gearTypes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
