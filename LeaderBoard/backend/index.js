import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';
import userRoutes from './router/UserRoutes.js';
import cors from 'cors';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://leader-board-frontend-git-main-anshul-vermas-projects-5094b606.vercel.app/', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
