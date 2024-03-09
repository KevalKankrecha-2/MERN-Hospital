const express = require("express");
const { connection } = require("./configs/db");
require("dotenv").config();
const cors = require("cors");

// const appointmentRouter = require("./routes/Appointments.Route");
const doctorRouter = require("./routes/Doctors.Route");
const departmentRouter = require("./routes/Department.Route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/departments",departmentRouter);
// app.use("/appointments", appointmentRouter);
app.use("/doctors", doctorRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect to DB");
    console.log(error);
  }
  console.log(`Listening at port ${process.env.port}`);
});
