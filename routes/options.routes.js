import express from 'express';
import * as optionController from '../options/controllers/options.controller.js';
import authMiddleware from '../auth/middlewares/auth.middleware.js';
import {
  uploadImage,
  uploadToStorage,
} from '../options/middleware/options.middleware.js';
const router = express.Router();

router.post(
  '/',
  authMiddleware,
  uploadImage,
  uploadToStorage,
  optionController.createOptionCtrl
);
router.get('/', authMiddleware, optionController.getAllOptionsCtrl);
router.get('/:id', authMiddleware, optionController.getOptionByIdCtrl);
router.put('/:id', authMiddleware, optionController.updateOptionCtrl);
router.delete('/:id', authMiddleware, optionController.deleteOptionCtrl);

export default router;
