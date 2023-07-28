import express from "express";
import { Connection } from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();

dotenv.config();

app.use('/', router);

const PORT = 8000;

app.listen(PORT, console.log(`server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);