import express from 'express';

// const app = express();
// const port = process.env.port || 3001;

// app.use(express.json());

// app.get('', (req, res) => {
//     res.send('<h1>HELLO</h1>');
// });

// app.get('/about', (req, res) => {
//     console.log(req.body);
//     res.send(`Hello`);
// });

// app.listen(port, () => {
//     console.log('Server up and running');
// });

import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://justinhemnath96:Solicitarmunicion@123@cluster0.jjzotxs.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);
