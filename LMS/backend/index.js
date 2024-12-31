import express, { urlencoded } from 'express';
const app = express();
import connect from './database/db.js';
import dotenv from 'dotenv';
import userRoute from './routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import courseRoute from './routes/CourseRoute.js';
import mediaRoute from './routes/MediaRoute.js';
import purchaseRoute from "./routes/CoursePurchaseRoute.js";
import courseProgressRoute from './routes/CourseProgressRoute.js';

dotenv.config();
connect();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/media",mediaRoute);
app.use("/api/user",userRoute);
app.use("/api/course",courseRoute);
app.use("/api/purchase",purchaseRoute);
app.use("/api/progress", courseProgressRoute);


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})