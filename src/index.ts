import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
app.get('/', (_, res) => res.send('Express + MongoDB + TypeScript Server'));



(async () => {
    const app = express();

    await mongoose.connect('mongodb://localhost:27017/node-server');

    console.log("🚀[database] Connected to mongodb://localhost:27017/node-server")

    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });

})();