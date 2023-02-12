const express = require("express");

const {
  addEmploye,
  addReport,
  getAllReports,
  getAllEmploye,
} = require("../Controller/empController");
const empRoute = express.Router();

//Get Request
empRoute.get("/Report", getAllReports);
empRoute.get("/allEmploye", getAllEmploye);

//post Request
empRoute.post("/addEmploye", addEmploye);
empRoute.post("/Report", addReport);

module.exports = empRoute;
