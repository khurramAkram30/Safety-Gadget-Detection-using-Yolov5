const empModel = require("../model/empModel");
const reportModel = require("../model/reportModel");

const addEmploye = async (req, res) => {
  const { name, email, age, dob, phoneNo } = req.body;

  try {
    const user = await empModel.find({ email: email });
    if (user === []) {
      const userCreated = await empModel.create({
        name: name,
        email: email,
        age: age,
        dob: dob,
        phoneNo: phoneNo,
      });
      return res
        .status(201)
        .json({ msg: "Employer added has id of : " + userCreated._id });
    } else {
      return res.status(200).json({ msg: "user already added", user });
    }
  } catch (e) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const addReport = async (req, res) => {
  const { emp_id, notWearing } = req.body;

  try {
    const resl = await reportModel.create({
      emp_id,
      notWearing,
    });
    return res.status(201).json({ msg: "Report Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const getAllReports = async (req, res) => {
  try {
    const res = await reportModel.find({});
    const data = res.map(async (e) => {
      const userInfo = await empModel.findById({ _id: e.emp_id });
      const returnData = { ...e, ...userInfo };
      return returnData;
    });
    return res.status(201).json({ msg: "Report Created", info: data });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error", info: [] });
  }
};

module.exports = { addEmploye, addReport, getAllReports };
