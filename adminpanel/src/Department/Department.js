import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Department = () => {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        // Fetch departments data 
        fetchDepartments();
    }, []);

    const token = localStorage.getItem('key');
    const config = {
        headers: {
            'authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NmYyOWZjMTNhZTBkNTE1MGZiMDAiLCJ1c2VybmFtZSI6ImlzaGFrYW5rcmVjaGEiLCJwYXNzd29yZCI6InlKNi5ATFoxSGV3bCQiLCJpYXQiOjE3MTA5NTczMDF9.l51ZcLni0VSEMru44hd6SD6VTkMQYXLyjGHiD6O3bVU`
        }
    };
    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/departments/', config);
            if (response.response?.status && (response.response?.status === 403 || response.response?.status === 401)) {
                navigate('/Login');
            } 
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
            if (error.response?.status && (error.response?.status === 403 || error.response?.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    const handleDeleteDepartment = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/departments/${id}`, config);
            if (response.status === 200) {
                fetchDepartments(); // Refresh departments after deleting
            } else {
                console.error('Failed to delete department');
            }
        } catch (error) {
            console.error('Error deleting department:', error);
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    return (
        <div>
            <h2>Department Management</h2>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Department List</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Department</li>
                        </ol>
                    </nav>
                </div>
                <div class="m-3">
                    <Link to="/Department/Add">
                        <button class="btn btn-danger">Add Department</button>
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
                                                <th scope="col">Department Name</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {departments.map((department) => (
                                                <tr key={department._id}>
                                                    <td>{department.depName}</td>
                                                    <td>
                                                        {/* Redirect to ManageDepartment Page */}
                                                        <Link to={`/Department/edit/${department._id}`}><button class="btn btn-primary">Edit</button></Link>
                                                        <button class="btn btn-danger" onClick={() => handleDeleteDepartment(department._id)}>Delete</button>
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

export default Department;