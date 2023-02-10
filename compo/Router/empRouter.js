const express = require("express");

const {
  addEmploye,
  addReport,
  getAllReports,
} = require("../Controller/empController");
const empRoute = express.Router();

//Get Request
empRoute.get("/Report", getAllReports);

//post Request
empRoute.post("/addEmploye", addEmploye);
empRoute.post("/Report", addReport);

module.exports = empRoute;
