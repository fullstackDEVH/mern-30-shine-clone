import express from 'express';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"

import routes from './src/api/routes';

const app = express();
dotenv.config();

const {PORT} = process.env;

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

app.use(routes)

app.use(handleError);

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});