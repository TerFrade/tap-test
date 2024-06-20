import { Router, Request, Response } from "express";
import { ExaminationHandler } from "../handlers/examination_handler";
import bodyParser from "body-parser";
import { ExaminationInput } from "../schema";

const ExaminationRouter = Router();
const handler = new ExaminationHandler();

const jsonParser = bodyParser.json();

ExaminationRouter.get("/", jsonParser, (req: Request, res: Response) => {
  const { input } = req.body as ExaminationInput;
  const result = handler.calculateExameeResults(input);
  res.send(result.toString());
});

module.exports = ExaminationRouter;