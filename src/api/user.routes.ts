import { Router } from 'express';

const seedRoutes = Router();

seedRoutes.get('/', async (req, res) => {
	try {
		res.send('Hello World');
	} catch (error) {
		console.error(error);
	}
});

export { seedRoutes };
