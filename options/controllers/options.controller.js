import * as optionService from '../services/options.service.js';

export const createOptionCtrl = async (req, res) => {
  try {
    const { body, imageUrl } = req;
    console.log('body', imageUrl);
    const option = await optionService.createOption({
      ...body,
      price: parseFloat(body.price),
      weight: parseFloat(body.weight),
      photo: imageUrl,
    });
    return res.json({ option });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while creating the option' });
  }
};

export const getAllOptionsCtrl = async (req, res) => {
  try {
    const options = await optionService.getAllOptions();
    return res.json({ options });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while fetching the options' });
  }
};

export const getOptionByIdCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const option = await optionService.getOptionById(id);
    return res.json({ option });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while fetching the option' });
  }
};

export const updateOptionCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const option = await optionService.updateOption(req.body, id);
    return res.json({ option });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while updating the option' });
  }
};

export const deleteOptionCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    await optionService.deleteOption(id);
    return res.json({ message: 'Option deleted successfully' });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: 'An error occurred while deleting the option' });
  }
};
