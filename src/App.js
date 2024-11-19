import './App.css';

function App() {
  return (
    <div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////
                                          START SECTION 1 - THE NAVBAR SECTION  
            /////////////////////////////////////////////////////////////////////////////////////////////*/}
            <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="">
                    <h3>Nwoye Michael Chukwudi</h3>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link active" aria-current="page" href="index.html">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                      <li className="nav-item"><a className="nav-link" href="#portfolio">portfolio</a></li>
                      <li className="nav-item"><a className="nav-link" href="#contact">contact</a>
                      </li>
                    </ul>
                    <button type="button" className="rounded-pill btn-rounded">
                      +2348130285140
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </nav>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////
                                        START SECTION 2 - THE INTRO SECTION  
            /////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <section id="home" className="intro-section">
              <div className="container">
                <div className="row align-items-center text-white">
                  {/* START THE CONTENT FOR THE INTRO  */}
                  <div className="col-md-6 intros text-start">
                    <h1 className="display-2">
                      <span className="display-2--intro">Hey!, I'm Nwoye Michael Chukwudi</span>
                      <span className="display-2--description lh-base">
                      A softwear engineer with over 3 years of experience on web technologies (HTML,CSS,Javascript,Nodejs,Mongodb,PHP,MYSQL).
                      </span>
                    </h1>
                    <button type="button" className="rounded-pill btn-rounded">Get in Touch
                      <span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </div>
                  {/* START THE CONTENT FOR THE VIDEO */}
                  <div className="col-md-6 intros text-end">
                    <div className="video-box">
                      <img src="images\peronal\HImage-1718927757771.jpg" alt="video illutration" className="img-fluid"/>


                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////
                                        START SECTION 3 - THE CAMPANIES SECTION  
            ////////////////////////////////////////////////////////////////////////////////////////////////////*/}

              <section id="campanies" className="campanies">
                <div className="container">
                  <div className="row text-center">
                    <h4 className="fw-bold lead mb-3">Skill</h4>
                    <div className="heading-line mb-5"></div>
                  </div>
                </div>
                {/* START THE CAMPANIES CONTENT  */}
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                        <p>Javascript</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                        <p>Bootstrap</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                        <p>PHP</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                       <p>Laravel</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                       <p>Nodejs</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <div className="campanies__logo-box shadow-sm">
                       <p>ReactJs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////
                                    START SECTION 4 - THE SERVICES  
            ///////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <section id="services" className="services">
              <div className="container">
                <div className="row text-center">
                  <h1 className="display-3 fw-bold">Experience</h1>
                  <div className="heading-line mb-1"></div>
                </div>

              </div>

              {/* START THE CONTENT FOR THE SERVICES  */}
              <div className="container">
                {/* START THE MARKETING CONTENT  */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content">
                      <div className="icon d-block fas fa-paper-plane"></div>
                      <h3 className="display-3--title mt-1">Infinity Tech World</h3>
                      <p className="lh-lg">
                      Provided guidance on HTML, CSS, JavaScript, and other relevant web technologies. Assisted students in troubleshooting coding issues and debugging their web projects. Facilitated discussions and interactive activities to reinforce theoretical concepts and practical skills. Collaborated with students to develop and enhance their problem-solving and critical thinking abilities in the context of web development. Offered guidance on best practices, coding conventions, and efficient development workflows.,
                      </p>
                      <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                        <span><i className="fas fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="services__pic" >
                      <img src="images\peronal\comImg-1718930451388.png" alt="marketing illustration" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                {/* START THE WEB DEVELOPMENT CONTENT  */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="services__pic">
                      <img src="images\peronal\comImg-1719700257920.png"  alt="web development illustration" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content">
                      <div className="icon d-block fas fa-code"></div>
                      <h3 className="display-3--title mt-1">Xpertech solution LTD</h3>
                      <p className="lh-lg">
                      Monitored, created, and populated 100+ QA sheets with designer and project manager. Engaged in 100+ hours of Codigniter training and PHP crash course with lead designer. Collaborated with designers and performance team on designing updates to sites and blogs, improving user experience by 41%. Briefed development team on website research, and made suggestions for website builds/products. This saved the development team 400+ hours. Participated in stand-ups 2 times a month. Team leaders would review, assign, and coach team members.
                      </p>
                      <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                        <span><i className="fas fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* START THE CLOUD HOSTING CONTENT  */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content">
                      <div className="icon d-block fas fa-cloud-upload-alt"></div>
                      <h3 className="display-3--title mt-1">Digital Dream ICT Academy</h3>
                      <p className="lh-lg">
                      Monitored, created, and populated 100+ QA sheets with designer and project manager. Engaged in 100+ hours of Codigniter training and PHP crash course with lead designer. Collaborated with designers and performance team on designing updates to sites and blogs, improving user experience by 41%. Briefed development team on website research, and made suggestions for website builds/products. This saved the development team 400+ hours. Participated in stand-ups 2 times a month. Team leaders would review, assign, and coach team members.
                      </p>
                      <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                        <span><i className="fas fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="services__pic">
                      <img src="images\peronal\comImg-1719700523795.png" alt="cloud hosting illustration" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////
                          START SECTION 8 - GET STARTED  
            /////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <section id="contact" className="get-started">
              <div className="container">
                <div className="row text-center">
                  <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
                  <div className="heading-line"></div>
                  <p className="lh-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum architecto modi.
                  </p>
                </div>

                {/* START THE CTA CONTENT  */}
                <div className="row text-white">
                  <div className="col-12 col-lg-6 gradient shadow p-3">
                    <div className="cta-info w-100">
                      <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
                      <p className="lh-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
                      </p>
                      <h3 className="display-3--brief">What will be the next step?</h3>
                      <ul className="cta-info__list">
                        <li>We'll prepare the proposal.</li>
                        <li>we'll discuss it together.</li>
                        <li>let's start the discussion.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 bg-white shadow p-3">
                    <div className="form w-100 pb-2">
                      <h4 className="display-3--title mb-5">start your project</h4>
                      <form action="#" className="row">
                        <div className="col-lg-6 col-md mb-3">
                          <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg"/>
                        </div>
                        <div className="col-lg-6 col-md mb-3">
                          <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control form-control-lg"/>
                        </div>
                        <div className="col-lg-12 mb-3">
                          <input type="email" placeholder="email address" id="inputEmail" className="shadow form-control form-control-lg"/>
                        </div>
                        <div className="col-lg-12 mb-3">
                          <textarea name="message" placeholder="message" id="message" rows="8" className="shadow form-control form-control-lg"></textarea>
                        </div>
                        <div className="text-center d-grid mt-1">
                          <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3">
                            submit
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////
                                      START SECTION 9 - THE FOOTER  
            ///////////////////////////////////////////////////////////////////////////////////////////////*/}
            <footer className="footer">
              <div className="container">
                <div className="row">
                  {/* CONTENT FOR THE MOBILE NUMBER  */}
                  <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                    <div className="contact-box__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="contact-box__info">
                      <a href="#" className="contact-box__info--title">+2348130285140</a>
                      <p className="contact-box__info--subtitle">  Mon-Fri 9am-6pm</p>
                    </div>
                  </div>  
                  {/* CONTENT FOR EMAIL  */}
                  <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                    <div className="contact-box__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="3 9 12 15 21 9 12 3 3 9" />
                        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                        <line x1="3" y1="19" x2="9" y2="13" />
                        <line x1="15" y1="13" x2="21" y2="19" />
                      </svg>
                    </div>
                    <div className="contact-box__info">
                      <a href="#" className="contact-box__info--title">info@company.com</a>
                      <p className="contact-box__info--subtitle">Online support</p>
                    </div>
                  </div>
                  {/* CONTENT FOR LOCATION  */}
                  <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                    <div className="contact-box__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="18" y2="6.01" />
                        <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                        <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                        <line x1="9" y1="4" x2="9" y2="17" />
                        <line x1="15" y1="15" x2="15" y2="20" />
                      </svg>
                    </div>
                    <div className="contact-box__info">
                      <a href="#" className="contact-box__info--title">Lagos, Nigeria</a>
                      <p className="contact-box__info--subtitle">Ago Palace Way, Okota</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* START THE SOCIAL MEDIA CONTENT  */}
              <div className="footer-sm" style={{backgroundColor: '#212121'}}>
                <div className="container">
                  <div className="row py-4 text-center text-white">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                      connect with us on social media
                    </div>
                    <div className="col-lg-7 col-md-6">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-github"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* START THE COPYRIGHT INFO  */}
              <div className="footer-bottom pt-5 pb-5">
                <div className="container">
                  <div className="row text-center text-white">
                    <div className="col-12">
                      <div className="footer-bottom__copyright">
                        &COPY; Copyright 2021 <a href="#">nwoye's</a> | Created by <a href="http://codewithpatrick.com" target="_blank">Nwoye Michael Chukwudi</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

            {/* BACK TO TOP BUTTON  */}
            <a href="#" className="shadow btn-primary rounded-circle back-to-top">
              <i className="fas fa-chevron-up"></i>
            </a>
      </div>
  );
}

export default App;
