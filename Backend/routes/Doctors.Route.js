const express = require("express");
const fs = require('fs');
const path = require('path');
const { Buffer } = require('buffer');

const { DoctorModel } = require("../models/Doctor.model");
require("dotenv").config();
const upload = require('../middlewares/fileUpload');

const router = express.Router();
router.get("/:id", async (req, res) => {
  try {
    const doctor = await DoctorModel.findById(req.params.id).populate('department').lean();
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    if (doctor.image) {
      try {
        const imagePath = path.join(__dirname, '../middlewares/uploads', doctor.image.split('uploads')[1].replace(/\\/g, '')); 
        const imageData = fs.readFileSync(imagePath);
        const base64Image = Buffer.from(imageData).toString('base64');
        doctor.image = `data:image/jpeg;base64,${base64Image}`;
      } catch (error) {
        doctor.image = "NO IMAGE FOUND";
      }
    }
    res.json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const doctors = await DoctorModel.find().populate('department').lean();
    const finalDoctorsResponse = [];

    await Promise.all(doctors.map(async (doctor) => {
      if (doctor.image) {
        try {
          const imagePath = path.join(__dirname, '../middlewares/uploads', doctor.image.split('uploads')[1].replace(/\\/g, '')); 
          const imageData = fs.readFileSync(imagePath);
          const base64Image = Buffer.from(imageData).toString('base64');
          doctor.image = `data:image/jpeg;base64,${base64Image}`;
          finalDoctorsResponse.push(doctor);
        } catch (error) {
          doctor.image = "NO IMAGE FOUND";
          finalDoctorsResponse.push(doctor);
        }
      }
      else{
        finalDoctorsResponse.push(doctor);
      }
    }));
    // console.log
    res.json(finalDoctorsResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(413).send(`File not uploaded!, Please 
                            attach jpeg file under 5 MB`);
    }
    req.body.image = req.file.path;
    let doctor = new DoctorModel(req.body);
    await doctor.save();
    return res.send({ data: doctor });
  } catch (error) {
    
    res.send({ message: error });
  }
});

// router.post("/login", async (req, res) => {
//   const { docID, password } = req.body;
//   try {
//     const doctor = await DoctorModel.findOne({ docID, password });
//     console.log(doctor);
//     if (doctor) {
//       const token = jwt.sign({ foo: "bar" }, process.env.key, {
//         expiresIn: "24h",
//       });
//       res.send({ message: "Successful", user: doctor, token: token });
//     } else {
//       res.send({ message: "Wrong credentials" });
//     }
//   } catch (error) {
//     console.log({ message: "Error" });
//     console.log(error);
//   }
// });

router.patch("/:doctorId", upload.single("image"), async (req, res) => {
  const id = req.params.doctorId;
  try {
    if(req.file){
      req.body.image = req.file.path;
    }
    const updatedDoctor = await DoctorModel.findByIdAndUpdate({ _id: id }, req.body, {new:true});
    res.status(200).send({ data: updatedDoctor });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Update." });
  }
});

router.delete("/:doctorId", async (req, res) => {
  const id = req.params.doctorId;
  try {
    const deletedDoctor = await DoctorModel.deleteOne({ _id: id });
    if (deletedDoctor.deletedCount === 1) {
      res.status(200).send({ message: "Doctor deleted successfully" });
    } else {
      res.status(404).send({ error: "Doctor not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to delete." });
  }
});

router.get('/api/imageData', (req, res) => {
  const imagePath = path.join(__dirname, '../middlewares/uploads', '1709918607542-BAPSallInOne.png');
    // Read image file
    fs.readFile(imagePath, (err, imageData) => {
      if (err) {
        console.error('Error reading image file:', err);
        res.status(500).json({ error: 'Error reading image file' });
        return;
      }
  
      // Convert image data to base64
      const base64Image = Buffer.from(imageData).toString('base64');
  
      // Additional data
      const additionalData = {
        someKey: 'someValue'
      };
  
      // Send base64 encoded image and additional data in a single response
      res.json({
        image: `data:image/jpeg;base64,${base64Image}`,
        additionalData
      });
    });
});




module.exports = router;
