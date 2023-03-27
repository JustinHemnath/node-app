import express from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './src/db/mongodb.js';

dotenv.config();

const app = express();
const port = process.env.port || 3001;

app.use(express.json());

app.get('', (req, res) => {
    res.send('<h1>HELLO</h1>');
});

app.get('/about', (req, res) => {
    console.log(req.body);
    res.send(`Hello`);
});

// app.listen(port, () => {
//     console.log('Server up and running');
// });

(async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log('Server up and running');
        });
    } catch (err) {
        console.log(err);
    }
})();
