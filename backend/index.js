import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from './routes/user.route.js'
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/jobs.route.js';
import applicationRoute from './routes/application.route.js';

dotenv.config({});
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: "https://jobportal-frontend-z8ux.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  app.use(cors(corsOption));
  
  app.options('*', cors(corsOption));  // Allow preflight requests



const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, ()=>{
    console.log(`app listining to port ${PORT}`);
    connectDB();
    
})