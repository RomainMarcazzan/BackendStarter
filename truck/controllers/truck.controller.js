import * as truckService from "../services/truck.service.js";

export const createTruckCtrl = async (req, res) => {
  try {
    const { body, imageUrl } = req;
    console.log("body", imageUrl);
    const newTruck = await truckService.createTruck({
      ...body,
      price: parseFloat(body.price),
      weight: parseFloat(body.weight),
      photo: imageUrl,
    });
    return res.status(200).json(newTruck);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllTrucks = async (req, res) => {
  try {
    const trucks = await truckService.getAllTrucks();
    return res.status(200).json(trucks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTruckById = async (req, res) => {
  try {
    const { id } = req.params;
    const truck = await truckService.getTruckById(id);
    return res.status(200).json(truck);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedTruck = await truckService.updateTruck(id, body);
    return res.status(200).json(updatedTruck);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTruck = async (req, res) => {
  try {
    const { id } = req.params;
    await truckService.deleteTruck(id);
    return res.status(200).json({ message: "Truck deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTruckByType = async (req, res) => {
  try {
    const { type } = req.params;
    const trucks = await getTruckByType(type);
    return res.json({ trucks });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching the trucks" });
  }
};

export const addOptionToTruck = async (req, res) => {
  try {
    const { truckId, optionId } = req.params;
    const truck = await addOptionToTruck(optionId, truckId);
    return res.json({ truck });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred while adding option to truck" });
  }
};

export const removeOptionFromTruck = async (req, res) => {
  try {
    const { truckId, optionId } = req.params;
    const truck = await removeOptionFromTruck(optionId, truckId);
    return res.json({ truck });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred while removing option from truck" });
  }
};

export const getOptionsByTruckId = async (req, res) => {
  try {
    const { truckId } = req.params;
    const options = await getOptionsByTruckId(truckId);
    return res.json({ options });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "An error occurred while fetching options by truck id",
    });
  }
};
