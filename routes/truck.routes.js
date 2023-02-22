import express from 'express';
import * as truckController from '../truck/controllers/truck.controller.js';
import authMiddleware from '../auth/middlewares/auth.middleware.js';
import {
  uploadImage,
  uploadToStorage,
} from '../truck/middleware/truck.middleware.js';
const router = express.Router();

router.post(
  '/',
  authMiddleware,
  uploadImage,
  uploadToStorage,
  truckController.createTruckCtrl
);
router.get('/', truckController.getAllTrucks);
router.get('/:id', truckController.getTruckById);
router.put('/:id', truckController.updateTruck);
router.delete('/:id', truckController.deleteTruck);
router.get('/type/:type', truckController.getTruckByType);
router.post('/:truckId/options/:optionId', truckController.addOptionToTruck);
router.delete(
  '/:truckId/options/:optionId',
  truckController.removeOptionFromTruck
);
router.get('/:truckId/options', truckController.getOptionsByTruckId);

export default router;
