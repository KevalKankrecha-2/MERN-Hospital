import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [reportFile, setReportFile] = useState(null);
  const [appointments, setAppointments] = useState({});
  useEffect(() => {
    // Fetch doctors data 
    fetchDoctors();
    fetchDepartments();
  }, []);
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/doctors/');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/departments/');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('patientName', appointments.patientName);
      formData.append('patientEmail', appointments.patientEmail);
      formData.append('patientMobile', appointments.patientMobile);
      formData.append('department', appointments.department);
      formData.append('doctor', appointments.doctor);
      formData.append('status', 'pending');
      formData.append('date', appointments.date);

      // Assuming you have the file object stored in a variable named 'reportFile'
      formData.append('report', reportFile);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const response = await axios.post(`http://localhost:8080/appointments/`, formData, config);


      // Add and Redirect to Doctor List Page
      console.log(response);
      alert("Appointment Booked successfully!");
      window.location.reload();

    } catch (error) {
      console.error("Error saving doctor:", error);
    }
  };
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>Welcome to Medilab</h1>
          <h2>Empowering Healthcare Efficiency</h2>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
      <main id="main">
        <section id="why-us" class="why-us">
          <div class="container">

            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="content">
                  <h3>Why Choose Medilab?</h3>
                  <p>

                    Choose Medilab for unparalleled efficiency, comprehensive features, and seamless integration, ensuring streamlined operations and exceptional patient care.
                  </p>
                  <div class="text-center">
                  </div>
                </div>
              </div>
              <div class="col-lg-8 d-flex align-items-stretch">
    <div class="icon-boxes d-flex flex-column justify-content-center">
        <div class="row">
            <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Medical Check-ups</h4>
                    <p>Comprehensive medical examinations to assess your overall health status and detect potential health issues early.</p>
                </div>
            </div>
            <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Health Education</h4>
                    <p>Educational programs and resources to empower individuals and communities to make informed decisions about their health and well-being.</p>
                </div>
            </div>
            <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4>Preventive Care</h4>
                    <p>Strategies and interventions aimed at preventing illness and promoting healthy behaviors to maintain optimal health.</p>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>

          </div>
        </section>


        <section id="counts" class="counts">
          <div class="container">

            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="fas fa-user-md"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Doctors</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="far fa-hospital"></i>
                  <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Departments</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-flask"></i>
                  <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Research Labs</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Awards</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="services" class="services">
    <div class="container">

        <div class="section-title">
            <h2>Our Services</h2>
            <p>Explore our range of healthcare services designed to meet your medical needs and promote well-being.</p>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-heartbeat"></i></div>
                    <h4><a href="#">General Check-ups</a></h4>
                    <p>Comprehensive health assessments to monitor your overall well-being and detect potential health issues early.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-pills"></i></div>
                    <h4><a href="#">Specialized Treatments</a></h4>
                    <p>Advanced medical treatments and therapies tailored to address specific health conditions and improve quality of life.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-hospital-user"></i></div>
                    <h4><a href="#">Emergency Care</a></h4>
                    <p>Rapid and efficient emergency medical services delivered by experienced healthcare professionals round-the-clock.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-dna"></i></div>
                    <h4><a href="#">Diagnostic Services</a></h4>
                    <p>State-of-the-art diagnostic imaging and laboratory services for accurate diagnosis and treatment planning.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-wheelchair"></i></div>
                    <h4><a href="#">Surgery</a></h4>
                    <p>Comprehensive surgical interventions performed by skilled surgeons using advanced surgical techniques and technology.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-notes-medical"></i></div>
                    <h4><a href="#">Rehabilitation Services</a></h4>
                    <p>Personalized rehabilitation programs to aid recovery and enhance functionality following injury, illness, or surgery.</p>
                </div>
            </div>

        </div>

    </div>
</section>


        <section id="appointment" class="appointment section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Make an Appointment</h2>
              <p>Book your appointment now to receive top-quality healthcare services. Our dedicated team is here to assist you in scheduling your visit at your convenience. Whether it's for a routine check-up or specialized treatment, we ensure a seamless experience tailored to your needs. Take the first step towards better health today!</p>
            </div>


            <form onSubmit={handleSubmit} role="form" class="php-email-form" encType="multipart/form-data">
              <div class="row">
                <div class="col-md-4 form-group">
                  <input type="text" name="name" class="form-control" id="patientName"
                    value={appointments.patientName || ""}
                    onChange={(e) =>
                      setAppointments({ ...appointments, patientName: e.target.value })
                    } placeholder="Patient Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <input type="text" name="name" class="form-control" id="patientEmail"
                    value={appointments.patientEmail || ""}
                    onChange={(e) =>
                      setAppointments({ ...appointments, patientEmail: e.target.value })
                    } placeholder="Patient Email" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input> <div class="validate"></div>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <input type="text" name="name" class="form-control" id="patientMobile"
                    value={appointments.patientMobile || ""}
                    onChange={(e) =>
                      setAppointments({ ...appointments, patientMobile: e.target.value })
                    } placeholder="Patient Mobile" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input><div class="validate"></div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 form-group mt-3">
                  <input type="date" name="name" class="form-control" id="date"
                    value={appointments.date || ""}
                    onChange={(e) =>
                      setAppointments({ ...appointments, date: e.target.value })
                    } placeholder="Patient Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input> <div class="validate"></div>
                </div>
                <div class="col-md-4 form-group mt-3">
                  <select id="department" className="form-select" onChange={(e) => setAppointments({ ...appointments, department: e.target.value })}
                  >
                    <option value="">Select Department</option>
                    {/* Populate options dynamically from the fetched doctors */}
                    {departments.map(department => (
                      <option key={department._id} value={department._id}>{department.depName}</option>
                    ))}
                  </select>
                  <div class="validate"></div>
                </div>
                <div class="col-md-4 form-group mt-3">
                  <select name="doctor" className="form-select" onChange={(e) => setAppointments({ ...appointments, doctor: e.target.value })}
                  >
                    <option value="">Select Doctor</option>
                    {/* Populate options dynamically from the fetched doctors */}
                    {doctors.map(doctor => (
                      <option key={doctor._id} value={doctor._id}>{doctor.docName}</option>
                    ))}
                  </select>
                  <div class="validate"></div>
                </div>
              </div>

              <div class="form-group mt-3">

                <label htmlFor="image">Select Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) => setReportFile(e.target.files[0])}
                /> <div class="validate"></div>
              </div>

              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Make an Appointment</button></div>

            </form>

          </div>
        </section>

        <section id="departments" class="departments">
          <div class="container">

            <div class="section-title">
              <h2>Departments</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiology</h3>
                        <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/departments-1.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/departments-2.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                        <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                        <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/departments-3.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                        <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                        <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/departments-4.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                        <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                        <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/departments-5.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="doctors" class="doctors">
          <div class="container">

            <div class="section-title">
              <h2>Doctors</h2>
              <p>Meet our dedicated team of experienced doctors committed to providing compassionate and comprehensive healthcare. From primary care physicians to specialists in various fields, our doctors are here to address your medical needs with expertise and care. We prioritize your well-being and strive to ensure you receive personalized attention and treatment tailored to your health goals. Trust in our doctors to guide you on your journey to better health and well-being.</p>
            </div>


            <div class="row">
              {doctors.map((doctor) => (
                <div class="col-lg-6">
                  <div class="member d-flex align-items-start">
                    <div class="pic"><img src={doctor.image} style={{ height: '100px', width: '150px' }} alt="No Profile Image">
                    </img></div>
                    <div class="member-info">
                      <h4>{doctor.docName}</h4>
                      <span>{doctor.department.depName}</span>
                      <p>{doctor.details}</p>
                      <div class="social">
                        <a href=""><i class="ri-twitter-fill"></i></a>
                        <a href=""><i class="ri-facebook-fill"></i></a>
                        <a href=""><i class="ri-instagram-fill"></i></a>
                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}




            </div>

          </div>
        </section>



        <section id="gallery" class="gallery">
          <div class="container">

            <div class="section-title">
              <h2>Gallery</h2>
              <p>Explore our diverse gallery showcasing captivating moments captured throughout our journey. From heartwarming patient stories to innovative medical breakthroughs, immerse yourself in the rich tapestry of our experiences. Each image tells a unique story, reflecting our commitment to excellence, compassion, and care. Join us on this visual voyage and discover the essence of our institution.</p>
            </div>

          </div>

          <div class="container-fluid">
            <div class="row g-0">

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-1.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-2.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-3.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-4.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-5.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-6.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-7.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-8.jpg" class="galelry-lightbox">
                    <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid"></img>
                  </a>
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
