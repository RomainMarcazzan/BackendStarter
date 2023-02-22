import express from 'express';
import * as truckTypeController from '../truck-type/controllers/truck-type.controller.js';
import authMiddleware from '../auth/middlewares/auth.middleware.js';
const router = express.Router();

router.post('/', authMiddleware, truckTypeController.createTruckTypeCtrl);
router.get('/', authMiddleware, truckTypeController.getAllTruckTypesCtrl);
export default router;
