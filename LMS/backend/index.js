import express, { urlencoded } from 'express';
const app = express();
import connect from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();
connect();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/user",router);

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})