import * as engineTypeService from '../services/engine-type.service.js';

export const createEngineTypeCtrl = async (req, res) => {
  try {
    const newEngineType = await engineTypeService.createEngineType({
      name: req.body.name,
    });
    return res.status(200).json(newEngineType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllEngineTypesCtrl = async (req, res) => {
  try {
    const engineTypes = await engineTypeService.getAllEngineTypes();
    return res.status(200).json(engineTypes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
