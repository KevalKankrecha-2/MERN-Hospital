import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        // Fetch doctors data 
        fetchDoctors();
    }, []);
    const token = localStorage.getItem('authToken');
    const config = {
        headers: {
            'authorization': token }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/doctors/', config);
            if (response.response?.status && (response.response?.status === 403 || response.response?.status === 401)) {
                navigate('/Login');
            } 
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    const handleDeleteDoctor = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/doctors/${id}`, config);
            if (response.status === 200) {
                fetchDoctors(); // Refresh doctors after deleting
            } else {
                console.error('Failed to delete doctor');
            }
        } catch (error) {
            console.error('Error deleting doctor:', error);
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    return (
        <div>
            <h2>Doctor Management</h2>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Doctor List</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Doctor</li>
                        </ol>
                    </nav>
                </div>
                <div class="m-3">
                    <Link to="/Doctor/Add">
                        <button class="btn btn-danger">Add Doctor</button>
                    </Link>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <table class="datatable table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Doctor Name</th>
                                                <th scope="col">Doctor Name</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Experience</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Education</th>
                                                <th scope="col">Details</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doctors.map((doctor) => (
                                                <tr key={doctor._id}>
                                                    <td>{doctor.department.depName}</td>
                                                    <td>{doctor.docName}</td>
                                                    <td>{doctor.mobile}</td>
                                                    <td>{doctor.email}</td>
                                                    <td>{doctor.gender}</td>
                                                    <td>{doctor.Expirence}</td>
                                                    <td>{doctor.address}</td>
                                                    <td>{doctor.education}</td>
                                                    <td>{doctor.details}</td>
                                                    <td>
                                                        <img src={doctor.image} style={{ height: '100px', width: '150px' }} alt="No Profile Image">
                                                        </img>
                                                    </td>
                                                    <td>
                                                        {/* Redirect to Managedoctor Page */}
                                                        <Link to={`/doctor/edit/${doctor._id}`}><button class="btn btn-primary">Edit</button></Link>
                                                        <button class="btn btn-danger" onClick={() => handleDeleteDoctor(doctor._id)}>Delete</button>
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

export default Doctor;