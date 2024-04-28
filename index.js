import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('Backend'));

const PORT = process.env.PORT;
const MODE = process.env.DEV_MODE;
const Mongo_URL = process.env.Mongo_URL;

import ConnectDB from "./Backend/Config/DB.js";
ConnectDB(Mongo_URL);

//All Project Routes
import Routes from "./Backend/Routes/Routes.js";

//Routes
app.use("/NoitaVonne/Task/api", Routes);

app.listen(PORT, () =>
    console.log(`Sever Start... Project 'NoitaVonne Task' ${MODE} Mode On Port No. ${PORT};`));