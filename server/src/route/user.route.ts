import express from 'express';

const router = express.Router();

import { createUser } from '../controller/myuserController';

router.route('/').post(createUser);

export default router;