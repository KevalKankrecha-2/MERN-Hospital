import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const ManageDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [department, setDepartment] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/departments/${id}`)
        .then((response) => {
          setDepartment(response.data);
        })
        .catch((error) => {
          console.error('Error fetching department:', error);
        });
    }
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      if (id) {
        const response = await axios.patch(`http://localhost:8080/departments/${id}`, department,config);
      } else {
        const response = await axios.post('http://localhost:8080/departments/add', department, config);
      }
      // Add and Redirect to Department List Page
      navigate('/Department');
    } catch (error) {
      console.error('Error saving department:', error);
    }
  };
  

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/Department">
              <i className="bi bi-menu-button-wide"></i><span>Departments</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/Doctor">
              <i className="bi bi-journal-text"></i><span>Doctors</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Patients</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart"></i><span>Appointments</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
        </ul>
      </aside>

      <main id="main" className="main">
        <div className="container">
          <div className="m-4">
            <form onSubmit={handleSubmit}>
              <div>
                Department Details
              </div>
              <div className="form-group p-2">
                <label>Enter Department Name</label>
                <input
                  value={department.depName || ""}
                  onChange={(e) =>
                    setDepartment({ ...department, depName: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Department Name"
                />
              </div>
              {/* Add more fields for department information */}
              <div className="form-group p-2 m-2">
                <button
                  type="submit"
                  className="btn btn-danger"
                >
                  {id ? "Edit" : "Add"} Department
                </button>
              </div>
            </form>
          </div>
        </div>
      </main >
    </>
  );
};

export default ManageDepartment;
