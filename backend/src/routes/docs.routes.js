import { Router } from 'express';
import { DocsController } from '../controllers/docs.controller.js';
const router = Router();
const docsController = new DocsController();

router.get('', docsController.getDocs);

export default router;
