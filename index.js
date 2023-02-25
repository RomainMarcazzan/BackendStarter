import express from 'express';
import authRoutes from './routes/auth.routes.js';
import truckRoutes from './routes/truck.routes.js';
import optionsRoutes from './routes/options.routes.js';
import engineTypeRoutes from './routes/engineType.routes.js';
import truckTypeRoutes from './routes/truckType.routes.js';
import gearTypeRoutes from './routes/gearType.routes.js';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/trucks', truckRoutes);
app.use('/options', optionsRoutes);
app.use('/truck-types', truckTypeRoutes);
app.use('/gear-types', gearTypeRoutes);
app.use('/engine-types', engineTypeRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
