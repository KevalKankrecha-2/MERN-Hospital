import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const ManageDoctor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    const [image, setImage] = useState(null);
    const [departments, setDepartments] = useState([]);
    const token = localStorage.getItem('authToken');
    const config = {
        headers: {
            'authorization': token }
    };
    const fetchDoctor = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/doctors/${id}`, config);
            if (response.response?.status && (response.response?.status === 403 || response.response?.status === 401)) {
                navigate('/Login');
            } 
            setDoctor(response.data);
        } catch (error) {
            console.error('Error fetching doctor:', error);
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
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
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
        }
    };
    useEffect(() => {
        if (id) {
            fetchDoctor();
        }
        fetchDepartments();
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('docName', doctor.docName);
            formData.append('department', doctor.department);
            formData.append('mobile', doctor.mobile);
            formData.append('email', doctor.email);
            formData.append('password', doctor.password);
            formData.append('gender', doctor.gender);
            formData.append('Expirence', doctor.Expirence);
            formData.append('address', doctor.address);
            formData.append('education', doctor.education);
            formData.append('details', doctor.details);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': token}
            };
            if (id) {
                const response = await axios.patch(`http://localhost:8080/doctors/${id}`, formData, config);
            } else {
                const response = await axios.post('http://localhost:8080/doctors/add', formData, config);
            }
            // Add and Redirect to Doctor List Page
            navigate('/Doctor');
        } catch (error) {
            console.error("Error saving doctor:", error);
            if (error.response.status && (error.response.status === 403 || error.response.status === 401)) {
                navigate('/Login');
            } 
        }
    };

    return (
        <>
            <main id="main" className="main">
                <div className="container">
                    <div className="m-4">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div>
                                Doctor Details
                            </div>
                            <div className="form-group p-2">
                                <label htmlFor="department">Department:</label>
                                <select
                                    id="department"
                                    value={departments._id}
                                    onChange={(e) => setDoctor({ ...doctor, department: e.target.value })}
                                    className="form-control"
                                >
                                    <option value="">Select Department</option>
                                    {/* Iterate over departments to generate options */}
                                    {departments.map((department) => (
                                        <option key={department._id} value={department._id}>{department.depName}</option>
                                    ))}
                                </select>
                                <label htmlFor="docName">Doctor Name:</label>
                                <input
                                    id="docName"
                                    value={doctor.docName || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, docName: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Doctor Name"
                                />

                                <label htmlFor="mobile">Mobile Number:</label>
                                <input
                                    id="mobile"
                                    value={doctor.mobile || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, mobile: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                />

                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    value={doctor.email || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, email: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                />

                                <label htmlFor="password">Password:</label>
                                <input
                                    id="password"
                                    value={doctor.password || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, password: e.target.value })
                                    }
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />

                                <label htmlFor="gender">Gender:</label>
                                <input
                                    id="gender"
                                    value={doctor.gender || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, gender: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Gender"
                                />

                                <label htmlFor="Expirence">Experience:</label>
                                <input
                                    id="Expirence"
                                    value={doctor.Expirence || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, Expirence: e.target.value })
                                    }
                                    type="number"
                                    className="form-control"
                                    placeholder="Experience"
                                />

                                <label htmlFor="address">Address:</label>
                                <input
                                    id="address"
                                    value={doctor.address || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, address: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                />

                                <label htmlFor="education">Education:</label>
                                <input
                                    id="education"
                                    value={doctor.education || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, education: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Education"
                                />

                                <label htmlFor="details">Details:</label>
                                <input
                                    id="details"
                                    value={doctor.details || ""}
                                    onChange={(e) =>
                                        setDoctor({ ...doctor, details: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Details"
                                />
                            </div>
                            <div>
                                {doctor.image ? (
                                    <img src={doctor.image} style={{ height: '100px', width: '150px' }} alt="Profile Image" />
                                ) : (
                                    <p>No Profile Image</p>
                                )}
                                {/* Your other input fields */}
                                <label htmlFor="image">Select Image:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="form-group p-2 m-2">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                >
                                    {id ? "Edit" : "Add"} Doctor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ManageDoctor;
