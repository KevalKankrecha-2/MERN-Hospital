import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Department = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        // Fetch departments data 
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/departments/');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    const handleDeleteDepartment = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/departments/${id}`);
            if (response.status === 200) {
                fetchDepartments(); // Refresh departments after deleting
            } else {
                console.error('Failed to delete department');
            }
        } catch (error) {
            console.error('Error deleting department:', error);
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