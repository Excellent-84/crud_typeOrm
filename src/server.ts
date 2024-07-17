import Router from 'express';
import router from './routes/router.js';

const app = Router();
const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
