const mongoose = require('mongoose');
const AppointmentStatus = require('../AppointmentStatus'); 

const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    patientMobile: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId, // Assuming department is stored as ObjectId
        ref: 'department', // Reference to the Department model
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId, // Assuming doctor is stored as ObjectId
        ref: 'doctor', // Reference to the Doctor model
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    report: {
        type: String // Assuming the file path will be stored as a string
    },
    status: {
        type: String,
        enum: AppointmentStatus,
        default: AppointmentStatus.PENDING
    }
});

const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = Appointment;
