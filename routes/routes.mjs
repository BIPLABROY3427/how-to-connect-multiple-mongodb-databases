import express from 'express';
const router = express.Router();
import Biplab from '../controllers/test.mjs';
router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/test', Biplab); // test connection

export default router;