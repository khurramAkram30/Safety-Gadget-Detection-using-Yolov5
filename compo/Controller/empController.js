const empModel = require("../model/empModel");
const reportModel = require("../model/reportModel");

const addEmploye = async (req, res) => {
  const { name, email, age, dob, phoneNo } = req.body;

  try {
    const user = await empModel.find({ email: email });
    if (user.length === 0) {
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

const getAllEmploye = async (req, res) => {
  try {
    const user = await empModel.find();
    return res.status(200).json({ employees: user });
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

// ateeb sey dikhwana hai
const getAllReports = async (req, res) => {
  try {
    const data = await reportModel.find({});
    const employee = await empModel.find({});
    var temp = [];
    const data_to_send =  employee.forEach((each_elem, index)=>{
      const _id = each_elem._id.toString().replace(/ObjectId\("(.*)"\)/, "$1")
      const test =  data.filter((each_report)=>{
        return each_report.emp_id == _id;
      })
      if(test.length > 0){
        temp.push({
          ...test[0]._doc,
          ...each_elem._doc
        })
      }
      // return {
      //   ...test,
      //   ...each_elem
      // }
    })
    return res
      .status(200)
      .json({ msg: "Unknown Report Generated", info: temp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error", info: [] });
  }
};

const getUnknownReport = async (req, res) => {
  try {
    const data = await reportModel.find({ emp_id: "Unknown" });
    return res
      .status(200)
      .json({ msg: "Unknown Report Generated", info: data });
  } catch (e) {
    return res.status(500).json({ msg: "Internal server error", info: [] });
  }
};

const deleteEmploye = async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await empModel.findByIdAndDelete({ _id });
    return res.status(200).json({ msg: "user deleted" });
  } catch (e) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const updateEmploye = async (req, res) => {
  const { _id, updateOption } = req.body;
  try {
    const user = await empModel.findByIdAndUpdate({ _id }, updateOption);
    return res.status(200).json({ msg: "user updated" });
  } catch (e) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};





module.exports = { addEmploye, addReport, getAllEmploye ,deleteEmploye, updateEmploye,getAllReports,getUnknownReport};
