import { Express } from "express";

module.exports = function (app: Express) {
  app.use("/examination", require("./examination"));
};
