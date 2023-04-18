import express from 'express';
import users from '../model/users.js';

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('HOMEPAGE ROUTE');
});

router.route('/newuser').post(async (req, res) => {
    if (!req.body.name) {
        res.send('THERE ARE NO USERS REGISTERED');
    } else {
        const user = await users.create(req.body);
        console.log(user);
        res.status(400).send(user);
        // res.status(400).send(`WELCOME ${req.body.name}`);
    }
});

export default router;
