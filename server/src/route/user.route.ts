import express from 'express';

const router = express.Router();

import { createUser } from '../controller/myuserController';
import { jwtCheck } from '../middleware/auth';

router.route('/').post(jwtCheck,createUser);

export default router;