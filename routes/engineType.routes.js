import express from 'express';
import * as engineTypeController from '../engine-type/controllers/engine-type.controller.js';
import authMiddleware from '../auth/middlewares/auth.middleware.js';
const router = express.Router();

router.post('/', authMiddleware, engineTypeController.createEngineTypeCtrl);
router.get('/', authMiddleware, engineTypeController.getAllEngineTypesCtrl);
export default router;
