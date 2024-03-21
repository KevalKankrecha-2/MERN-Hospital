// src/ContactUs.js
import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {

  const [DoctorCount, setDoctorCount] = useState(0);
  const [DepartmentCount, setDepartmentCount] = useState(0);
  const [AppoinemtnCount, setAppoinemtnCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const config = {
      headers: {
        'authorization': token
      }
    };
    async function getDoctorCount() {
      try {
        const response = await axios.get('http://localhost:8080/doctors/count', config); // Assuming you have an API endpoint to fetch the count
        setDoctorCount(response.data.countDoctor); // Assuming the count is returned as { count: 145 } in the response
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    }
    async function getDepartmentCount() {
      try {
        const response = await axios.get('http://localhost:8080/departments/count', config);
        setDepartmentCount(response.data.countDepartment);
      } catch (error) {
        console.error('Error fetching department count:', error);
      }
    }
    async function getAppoinementCount() {
      try {
        const response = await axios.get('http://localhost:8080/appointments/count', config);
        setAppoinemtnCount(response.data.countAppointments);
      } catch (error) {
        console.error('Error fetching department count:', error);
      }
    }


    getDepartmentCount();
    getDoctorCount();
    getAppoinementCount();
  }, []);
  return (
    <>
      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/Department">
              <i class="bi bi-menu-button-wide"></i><span>Departments</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/Doctor">
              <i class="bi bi-journal-text"></i><span>Doctors</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-layout-text-window-reverse"></i><span>Patients</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-bar-chart"></i><span>Appointments</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
          </li>





        </ul>

      </aside>

      <main id="main" class="main">

        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard">
          <div class="row">

            <div class="col-lg-12">
              <div class="row">

                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card sales-card">

                    

                    <div class="card-body">
                      <h5 class="card-title">Departments</h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{DoctorCount}</h6>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card revenue-card">

                   

                    <div class="card-body">
                      <h5 class="card-title">Doctors </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-currency-dollar"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{DepartmentCount}</h6>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xxl-4 col-xl-12">

                  <div class="card info-card customers-card">

                   

                    <div class="card-body">
                      <h5 class="card-title">Patients </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{AppoinemtnCount}</h6>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                <div class="col-12">
                  <div class="card">

                
                  </div>
                </div>

              </div>
            </div>


          </div>
        </section>

      </main>

    </>
  );
}

export default Home;
