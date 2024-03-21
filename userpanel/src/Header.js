import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./styles.css";

let Header = () => {
  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">Medilab</a></h1>
          <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></img></a>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>

        </div>
      </header>
    </>
  );
};
export default Header;
