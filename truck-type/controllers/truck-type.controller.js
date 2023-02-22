import * as truckTypeService from '../services/truck-type.service.js';

export const createTruckTypeCtrl = async (req, res) => {
  try {
    const newTruckType = await truckTypeService.createTruckType({
      name: req.body.name,
    });
    return res.status(200).json(newTruckType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllTruckTypesCtrl = async (req, res) => {
  try {
    const truckTypes = await truckTypeService.getAllTruckTypes();
    return res.status(200).json(truckTypes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
