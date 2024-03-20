import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Appointment = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        fetchAppointments();
    }, []);


    const token = localStorage.getItem('key');
    const config = {
        headers: {
            'authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NmYyOWZjMTNhZTBkNTE1MGZiMDAiLCJ1c2VybmFtZSI6ImlzaGFrYW5rcmVjaGEiLCJwYXNzd29yZCI6InlKNi5ATFoxSGV3bCQiLCJpYXQiOjE3MTA5NTczMDF9.l51ZcLni0VSEMru44hd6SD6VTkMQYXLyjGHiD6O3bVU`
        }
    };

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/appointments/', config);
            if (response.response?.status && (response.response?.status === 403 || response.response?.status === 401)) {
                navigate('/Login');
            } 
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
            if (error.response?.status && (error.response?.status === 403 || error.response?.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    const handleStatusChange = async (id, status) => {
        try {
            const response = await axios.patch(`http://localhost:8080/appointments/${id}`, { status }, config);
            if (response.response?.status && (response.response?.status === 403 || response.response?.status === 401)) {
                navigate('/Login');
            } 
            if (response.status === 200) {
                fetchAppointments();
            } else {
                console.error('Failed to update appointment status');
            }
        } catch (error) {
            console.error('Error updating appointment status:', error);
            if (error.response?.status && (error.response?.status === 403 || error.response?.status === 401)) {
                navigate('/Login');
            } 
        }
    };

   const handleDownload = async (file) => {
        try {
          const response = await axios.get(`http://localhost:8080/appointments//download-pdf/${file.split('uploads\\')[1]}`, {
            responseType: 'blob', // set response type to blob for downloading files
            'authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NmYyOWZjMTNhZTBkNTE1MGZiMDAiLCJ1c2VybmFtZSI6ImlzaGFrYW5rcmVjaGEiLCJwYXNzd29yZCI6InlKNi5ATFoxSGV3bCQiLCJpYXQiOjE3MTA5NTczMDF9.l51ZcLni0VSEMru44hd6SD6VTkMQYXLyjGHiD6O3bVU`
          });
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', file); // Set the filename here
          document.body.appendChild(link);
          link.click();
        } catch (error) {
          console.error('Error downloading file:', error);
          if (error.response?.status && (error.response?.status === 403 || error.response?.status === 401)) {
            navigate('/Login');
        } 
        }
      }

    return (
        <div>
            <h2>Appointment Management</h2>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Appointment List</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Appointment</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <table className="datatable table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Appointment Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Doctor</th>
                                                <th scope="col">Date</th>
                                                <th scope='col'>Report</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map((patient) => (
                                                <tr key={patient._id}>
                                                    <td>{patient.patientName}</td>
                                                    <td>{patient.patientEmail}</td>
                                                    <td>{patient.patientMobile}</td>
                                                    <td>{patient.department.depName}</td>
                                                    <td>{patient.doctor.docName}</td>
                                                    <td>{patient.date}</td>
                                                    <td>
                                                    <button onClick={() => handleDownload(patient.report)}><i class="bi bi-download"></i></button>
                                                    </td>
                                                    <td>
                                                        {patient.status === "approved" && (
                                                            <button className="btn btn-danger" onClick={() => handleStatusChange(patient._id, 'rejected')}><i class="bi bi-x-circle-fill"></i></button>
                                                        )}
                                                        {patient.status === "rejected" && (
                                                            <button className="btn btn-success" onClick={() => handleStatusChange(patient._id, 'approved')}><i class="bi bi-check2-all"></i></button>
                                                        )}
                                                        {patient.status === "pending" && (
                                                            <div>
                                                                <button className="btn btn-danger" onClick={() => handleStatusChange(patient._id, 'rejected')}><i class="bi bi-x-circle-fill"></i></button>
                                                                <button className="btn btn-success" onClick={() => handleStatusChange(patient._id, 'approved')}><i class="bi bi-check2-all"></i></button>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Appointment;
