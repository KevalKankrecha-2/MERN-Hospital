let Footer = () => {
  return (
    <>
      <footer id="footer">

        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Medilab</h3>
                <p>123 Hospital Street,<br></br>
                  Citytown, State ZIP,<br></br>
                  Country</p>
              </div>


              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">About Us</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Our Services</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Doctors</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                </ul>
              </div>


              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">General Check-ups</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Emergency Care</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Specialized Treatments</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Surgery</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Diagnostic Services</a></li>
                </ul>
              </div>


              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email"></input><input type="submit" value="Subscribe"></input>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">

          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright <strong><span></span></strong> All Rights Reserved
            </div>
            <div class="credits">
              Created by <a href="/">Isha Kankrecha</a>
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>

      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
    </>
  );
};

export default Footer;
