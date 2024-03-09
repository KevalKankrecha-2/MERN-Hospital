import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';

import Doctor from './Doctor/Doctor';
import ManageDoctor from './Doctor/ManageDoctor';

import Department from './Department/Department';
import ManageDepartment from './Department/ManageDepartment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        {/* Department Route */}
        <Route path="/Department" element={<Department />}></Route>
        <Route path="/Department/Add" element={<ManageDepartment />}></Route>
        <Route path="/Department/edit/:id" element={<ManageDepartment />}></Route>

        {/* Doctor Route */}
        <Route path="/Doctor" element={<Doctor />}></Route>  
        <Route path="/Doctor/Add" element={<ManageDoctor />}></Route>
        <Route path="/Doctor/edit/:id" element={<ManageDoctor />}></Route>
                
      </Route>
    </Routes>
  </BrowserRouter>

);
reportWebVitals();