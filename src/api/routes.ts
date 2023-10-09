import express from 'express';

import { seedRoutes } from './user.routes';

const apiRoutes = express.Router();

apiRoutes.use('/seed', seedRoutes);

export { apiRoutes };
