import { Link } from "react-router-dom";
import "./styles.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";


let Header = () => {
  return (
    <>
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""></img>
          <span class="d-none d-lg-block">Hospital MMS</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>

      <div class="search-bar">
        <form class="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword"></input>
          <button type="submit" title="Search"><i class="bi bi-search"></i></button>
        </form>
      </div>

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">

          <li class="nav-item d-block d-lg-none">
            <a class="nav-link nav-icon search-bar-toggle " href="#">
              <i class="bi bi-search"></i>
            </a>
          </li>

          <li class="nav-item dropdown">



          </li>

          <li class="nav-item dropdown">

         

          </li>

          <li class="nav-item dropdown pe-3">

            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </a>

          </li>

        </ul>
      </nav>

    </header>
    <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="/">
                        <i class="bi bi-heart-pulse-fill"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/Department">
                        <i class="bi bi-clipboard2-pulse-fill"></i><span>Departments</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/Doctor">
                            <i className="bi bi-person-fill"></i><span>Doctors</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-person-fill"></i><span>Patients</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="Appointment">
                            <i className="bi bi-bar-chart"></i><span>Appointments</span>
                        </a>
                    </li>
                </ul>
            </aside>
    </>
  );
};
export default Header;
