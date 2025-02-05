import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import homeRouter from './routes/homeRouter.js';
import authRouter from './routes/authRouter.js'; // Import authRouter

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter); // Use authRouter for authentication routes
app.use('/', homeRouter); // Use homeRouter for home routes

dbConnection();
app.use(errorMiddleware);

export default app;