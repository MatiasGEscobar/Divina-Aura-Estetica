import express from "express";
import router from "./routes/indexRoutes";

const server = express();

//MIDDLEWARES DE EXPRESS
server.use(express.json());
server.use(router);

export default server;