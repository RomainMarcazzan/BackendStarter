import express from 'express';
import * as gearTypeController from '../gear-type/controllers/gear-type.controller.js';
import authMiddleware from '../auth/middlewares/auth.middleware.js';
const router = express.Router();

router.post('/', authMiddleware, gearTypeController.createGearTypeCtrl);
router.get('/', authMiddleware, gearTypeController.getAllGearTypesCtrl);
export default router;
