const express = require("express");

const {
  addEmploye,
  addReport,
  getAllReports,
  getAllEmploye,
  updateEmploye,
  deleteEmploye,
  getUnknownReport
} = require("../Controller/empController");
const empRoute = express.Router();

//Get Request
empRoute.get("/allEmploye", getAllEmploye);
empRoute.get("/Report", getAllReports);
empRoute.get("/ReportUnkown", getUnknownReport);


//post Request
empRoute.post("/addEmploye", addEmploye);
empRoute.post("/Report", addReport);

//Put Request
empRoute.put("/updateEmploye", updateEmploye);

//Delete Request
empRoute.delete("/deleteEmploye", deleteEmploye);

module.exports = empRoute;
