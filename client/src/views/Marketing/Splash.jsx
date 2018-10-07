import React from "react";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <MarketingNavbar/>
        <br/><br/><br/><br/>

        {/* Header */}
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Translation Agency</div>
              <div className="intro-heading text-uppercase">Language Links</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/signup">Sign Up</a>
            </div>
          </div>
        </header>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Language Link is a full-service provider of linguistic services
                  including
                  translation, interpreting, localization and language training. We deliver top-quality language solutions
                  across
                  a wide range of media and communication channels. Our linguists work in all fields utilizing
                  state-of-the-art
            technology. Our services include, but are not limited to:</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-users aria-hidden='true' fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Translation</h4>
                <p className="text-muted">With over 20 years of experience providing professional translation services throughout
                  the
                  U.S. and internationally, the Language Link team offers the versatility of certified translation across
                  multiple
                  industries, with the personalized and high-quality attention to detail that every translation project
            needs.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Interpretation</h4>
                <p className="text-muted">Our network of trained and experienced interpreters are ready to speak your language in
                  any
                  venue and field. Our interpreting services are available over the phone or on-site anywhere in the world,
                  and
            include consecutive, conference and telephonic interpreting.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-book aria-hidden='true' fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Training</h4>
                <p className="text-muted">Language Link was founded by interpreters, and today one of our main pillars of
                  business
                  is language training the next generation of interpreters to break down the language barriers. We offer
                  corporate,
                  ESL, medical, legal, business and community Interpreter Training Programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">We specialize in multiple industries, with a main focus on the
                  fields
                  of technology and life science. Our company is a reliable partner for all your translation needs in the
                  following
                  areas:
          </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/01-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Technology</h4>
                  <p className="text-muted">Information Technology,  Telecommunications,  Medical Device and Diagnostics,
                     Energy
              and Mining</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/02-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Law</h4>
                  <p className="text-muted">Property and Patent Law, Immigration,  Depositions and Negotiations,  Legal
                    Conferences
              and Symposia </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/03-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Education</h4>
                  <p className="text-muted">Elementary Schools, Secondary Schools,  Higher Education,  E-learning </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/04-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Life Science</h4>
                  <p className="text-muted">Biotech,   Clinical Research,  Healthcare,   Medical Devices</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/05-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>International Development</h4>
                  <p className="text-muted">Social Development,  Economic Development, Health Improvement</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <img className="img-fluid" src="/img/portfolio/06-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Government</h4>
                  <p className="text-muted">Defense, Social Services,  GSA, Public Health</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Wherever you do business. We speak the language.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="/img/about/1.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">

                        <h4 className="subheading">Why Language Links?</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Our qualified, experienced, professional translators and interpreters must pass
                          our
                          rigorous testing. Our network of translators and interpreters come from around the globe and are
                          native
                          speakers in over 100 languages in Europe, Asia, the Middle East, Africa or the Americas. They're
                          not
                          just linguists, though. They’re all subject matter experts in their fields, including advanced
                          technology,
                    law, life science, government, international development, manufacturing and business services.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="/img/about/2.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">Project Management</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Our success isn’t just due to our translators and interpreters. We also provide
                          every
                          client with a dedicated Account and Project Manager who have experience guiding projects and
                          eliminating
                          inefficiencies so they're done on time and within budget. Lastly, we save you time and
                    money by using the best and most cutting-edge translation software tools.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="/img/about/3.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">Our Philosophy</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Language Links is a performance-driven company that guarantees timely and high
                          quality
                          service. We value clarity, professionalism and precision. Our goal is to create long-term
                          relationships
                          with clients and provide each one with personalized service. We also prioritize working with the
                          best
                    new technologies so we can offer our clients the very best service.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="/img/about/4.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">Clients and Testimonials</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Language Links is proud of the long list of clients we’ve assisted with our
                          linguistic
                          services. Some of our best-known clients include The World Bank, Shell Oil, Microsoft, The Boston
                          Globe,
                          IBM, Prudential Financial, MIT, The U.S. Departments of State, Defense, Commerce, and Homeland
                          Security.
                          Besides our list of clients, we also have a deep pool of praise from customers in all industries.
                          We
                          encourage you to check out our reviews online and client testimonials.
                  </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part Of Our Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-light" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Core Team</h2>
                <h3 className="section-subheading text-muted">The Language Linkss team is made up of experienced Project and
                  Account
                  Managers. They are professionals with a mission to ensure accuracy and deliver your projects on time and on
                  budget.
          </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="/img/team/1.jpg" alt="" />
                  <h4>Naomi Larson</h4>
                  <h6 className="subheading">Senior Translation Project Manager</h6>
                  <p className="text-muted">Naomi joined the Language Links team as a Marketing Manager in 2014 and subsequently
                    transitioned
                    to a Senior Translation Project Manager role. She has outstanding expertise in translation, localization,
                    desktop
              publishing and interpretinge experience in cross-cultural interaction.</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="/img/team/2.jpg" alt="" />
                  <h4>Patrick Michaels</h4>
                  <h6 className="subheading">Senior Account Manager</h6>
                  <p className="text-muted"> Patrick joined Language Links as an Account Manager in 2006. He handles multilingual
                    projects
                    with time-sensitive materials for clients in the defense and health industries. His extensive experience
                    in
                    translation and localization enables Patrick to capably handle complex projects in more than 90
              languages.</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="/img/team/3.jpg" alt="" />
                  <h4>Diana Pertersen</h4>
                  <h6 className="subheading">Senior Interpreting Project Manager</h6>
                  <p className="text-muted">Diana joined Language Links as a Senior Interpreting Project Manager in 2013. A
                    seasoned
                    industry professional, she has outstanding expertise in both interpreting and translation. Diana holds a
                    Bachelor’s
              degree in Linguistics and a Master’s degree in Science of Translation and Interpretation. </p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={null}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted"> Our Project and Account Managers will quickly become your company or
                  organization’s
            trusted partners in translation and interpretation projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Have a question or looking for a quote? Contact us!</h3>
              </div>
            </div>

            <form id="contactForm" name="sentMessage" noValidate="noValidate">
              <div className="row  justify-content-md-center">
                <div className="col-md-6">

                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required"
                      data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required"
                      data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
                      data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
                      data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>

          </div>
        </section>

      </div>
    );
  }
}

export default Splash;
