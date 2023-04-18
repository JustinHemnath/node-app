import express from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './src/db/mongodb.js';
import productsRoutes from './src/routes/products.js';

dotenv.config();

const app = express();
const port = process.env.port || 3001;

app.use(express.json());

app.use('/products', productsRoutes);

(async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log('Server up and running');
        });
    } catch (err) {
        console.log('NOT CONNECTED TO SERVER');
    }
})();
