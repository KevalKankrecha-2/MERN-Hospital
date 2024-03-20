const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const Appointment = require('../models/Appointment.model');

const jwtAuthMiddleware = require('../middlewares/jwtauth');

const AppointmentStatus = require('../AppointmentStatus');

const upload = require('../middlewares/fileUpload');

// Create an appointment with file upload
router.post('/',jwtAuthMiddleware, upload.single("report"), async (req, res) => {
    try {
        const { patientName, patientEmail, patientMobile, department, doctor, date, status } = req.body;
        const appointment = new Appointment({
            patientName,
            patientEmail,
            patientMobile,
            department,
            doctor,
            date,
            report: req.file ? req.file.path : null, // Save file path if uploaded, otherwise null
            status
        });
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all appointments
router.get('/',jwtAuthMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('department', 'depName')
            .populate('doctor', 'docName')
            .lean()
            .exec();

        res.json(appointments);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

// Define a route to serve PDF files
router.get('/download-pdf/:filename',jwtAuthMiddleware, (req, res) => {
    const { filename } = req.params;
    const pdfFilePath = path.join(__dirname, '../middlewares/uploads', filename);
  
    // Check if the file exists
    if (fs.existsSync(pdfFilePath)) {
      // Set appropriate headers
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  
      // Create a read stream from the file and pipe it to the response
      const pdfStream = fs.createReadStream(pdfFilePath);
      pdfStream.pipe(res);
    } else {
      res.status(404).send('File not found');
    }
});

// Get appointment by ID
router.get('/:id',jwtAuthMiddleware, async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).send();
        }
        res.send(appointment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update an appointment status by ID
router.patch('/:id',jwtAuthMiddleware, async (req, res) => {
    try {
        const { status } = req.body;

        // Check if the provided status is valid
        if (![AppointmentStatus.PENDING, AppointmentStatus.REJECTED, AppointmentStatus.APPROVED].includes(status)) {
            return res.status(400).send("Invalid status");
        }

        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).send();
        }

        res.send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete an appointment by ID
router.delete('/:id',jwtAuthMiddleware, async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).send();
        }
        res.send(appointment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
