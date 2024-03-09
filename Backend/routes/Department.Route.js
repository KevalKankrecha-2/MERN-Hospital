const express = require("express");
const { DepartmentModel } = require("../models/Department.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const department = await DepartmentModel.findById(req.params.id);
    if (!department) {
      return res.status(404).send({ error: "Department not found" });
    }
    res.status(200).send(department);
  } catch (error) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const departments = await DepartmentModel.find();
    res.status(200).send(departments);
  } catch (error) {
    res.status(400).send({ error: "Something went wrong" });
  }
});




router.post("/add", async (req, res) => {
  try {
    let Department = new DepartmentModel(req.body);
    await Department.save();
    return res.send({ Data: Department });
  } catch (error) {
    res.send({ message: "error" });
  }
});

router.patch("/:departmentId", async (req, res) => {
  const id = req.params.departmentId;
  try {
    const updatedDepartment = await DepartmentModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
    res.status(200).send({date:updatedDepartment});
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: "Something went wrong, unable to Update." });
  }
});

router.delete("/:departmentId", async (req, res) => {
  const id = req.params.departmentId;
  try {
    const department = await DepartmentModel.findByIdAndDelete({ _id: id });
    res.status(200).send({data:`Department with id ${id} deleted`});
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
