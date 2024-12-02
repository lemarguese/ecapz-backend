import * as express from 'express';
import { processCard, registerCard } from "../controllers/card";
const router = express.Router();

router.post('/register', registerCard);
router.post('/process', processCard);

export default router;
