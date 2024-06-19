import { Router, Request, Response } from "express";

const ExaminationRouter = Router();

ExaminationRouter.get("/", (req: Request, res: Response) => {
  res.send("From Examination Router");
});

module.exports = ExaminationRouter;
