const Student = require("../model/models.js");

showAll = async (req, res) => {
  await Student.find({}, (error, data) => {
    if (error) {
      return res.status(404).json({
        success: false,
        error: "User Does not exist",
        err: error,
      });
    }
    if (!data.length) {
      return res.status(401).json({
        success: true,
        error: "no user is found",
      });
    }
    return res.status(200).json({
      success: true,
      data: data,
    });
  });
};

addData = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(401).json({
      success: false,
      error: "Request is empty",
    });
  }
  console.log(req.body);
  const stu = new Student(req.body);
  if (!stu) {
    return res.status(400).json({
      success: false,
      error: "Not Registered",
    });
  }
  console.log(stu);
  stu
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: stu.id,
        user: stu,
        message: "Registered Successfully",
      });
    })
    .catch((error) => {
      return res.status(404).json({
        success: false,
        error: error,
      });
    });
};

searchName = (req, res) => {
  if (!req.body) {
    return res.status(401).json({
      success: false,
      error: "Request is empty",
    });
  }
  console.log(req.body.name);
  Student.find({ name: req.body.name }, (error, data) => {
    if (error) {
      return res.status(404).json({
        success: false,
        error: "User Does not exist",
        err: error,
      });
    }
    return res.status(200).json({
      success: true,
      data: data,
    });
  });
};

module.exports = {
  showAll,
  addData,
  searchName,
};
