import express from "express";
import TestController from "../controllers/test.controller";
const TestRouter = express.Router();

TestRouter.get("/", TestController.getTest);
TestRouter.post("/", TestController.postTest);

export default TestRouter;
