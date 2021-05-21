import express from "express";

const getTest: express.Handler = async (req, res, next) => {
  try {
    global.logger.success(req);
    return res.json("Test GET successful");
  } catch (err) {
    next(err);
  }
};

const postTest: express.Handler = async (req, res, next) => {
  try {
    global.logger.success(req);
    return res.json("Test POST successful");
  } catch (err) {
    next(err);
  }
};

const TestController = { getTest, postTest };
export default TestController;
