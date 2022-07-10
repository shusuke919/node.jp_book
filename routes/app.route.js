// routes/janken.route.js
import bodyParser from "body-parser";
import request from "request";
import express from "express";

import { getResult } from "../controllers/app.controller.js";

export const appRouter = express.Router();

appRouter.post("/", (req, res) => getResult(req, res));