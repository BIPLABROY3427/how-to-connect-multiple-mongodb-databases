import express from 'express';
import Router from './routes/routes.mjs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', Router); // Prefix your routes with /api
app.listen(3900, () => {
    console.log('Server is running on http://localhost:3900');
});