const express = require("express");
const router = express.Router();
const Student = require("../controller/student-ctrl");

router.get("/showall", Student.showAll);
router.post("/adddata", Student.addData);
router.post("/searchname", Student.searchName);

module.exports = router;
