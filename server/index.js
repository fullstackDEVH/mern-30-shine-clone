import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import dotenv from "dotenv"
import { handleError } from "./middleware/errors";
import {router} from "./routes/main";

const app = express();
dotenv.config();

// middleware
app.use(express.urlencoded({
    extended : true,
    limit : "50mb"
}));

app.use(express.json({
    extended : true,
    limit : "50mb"
}));

app.use(cors({credentials : true, origin : ['https://6qhfhu.csb.app']}));

app.use(cookieParser());

router(app);

// xử lý lỗi err cho controllers
app.use(handleError);

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>app.listen(process.env.PORT || 8080, ()=>{
        console.log(`you are listening on port 8080 and connect mongodb success!`)
    }))
    .catch(err => console.error(err));
