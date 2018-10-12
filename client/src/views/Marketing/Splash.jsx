import React from "react";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";
import "./Splash.css"

class Splash extends React.Component {
  render() {
    return (
      <div>
        <MarketingNavbar />

        {/* Header */}
        <header className="masthead" id="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading gitintro-text">StartHub</h2>
                <h3 className="section-subheading">
                  We provide speed and direction to the world’s top tech startup and corporate innovators.
                </h3>
                <a className="btn btn-primary btn-xl text-uppercase" href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </header>

        {/* Services */}
        <section className="bg-light" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h4 className="section-subheading">
                  Global Program Designed to Propel Startups.
                </h4>
              </div>
            </div>
            <div className="row service-section">
              <div className="col-md-4 col-sm-6 portfolio-item text-center">
                <img className="img-fluid" src="/img/portfolio/01-thumbnail.jpg" alt="" />
                <div className="portfolio-caption text-center">
                  <h4>Workspace</h4>
                  <p className="text-center">Whether you need a desk, office suite, or entire HQ, we create environments
                  that increase productivity, innovation, and collaboration. Recruitment,retention, innovation, and
                  productivity now require more. We offer the opportunity to reimagine employees’ days through
                  refreshing design, engaging community, and benefits for all.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item text-center">
                <img className="img-fluid" src="/img/portfolio/02-thumbnail.jpg" alt="" />
                <div className="portfolio-caption text-center">
                  <h4>Incubator</h4>
                  <p className="text-center">The main purpose of an incubator is to help startups to grow. They are
                  collaborative programs which help people solve problems associated with launching a startup by providing
                   a space to work, seed funding, mentoring, training and other benefits. They tend to allow startups to
                   base themselves within the incubator for months or years. </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item text-center">
                <img className="img-fluid" src="/img/portfolio/03-thumbnail.jpg" alt="" />
                <div className="portfolio-caption">
                  <h4>Accelerator</h4>
                  <p>Startup accelerators support early-stage, growth-driven companies through
                  education, mentorship, and financing. The accelerator experience is a process of intense, rapid, and immersive
                   education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth
                    of learning-by-doing into just a few months.</p>
                </div>
              </div>
              <div className="row service-section">
                <div className="col-md-4 col-sm-6 portfolio-item text-center">
                  <img className="img-fluid" src="/img/portfolio/04-thumbnail.jpg" alt="" />
                  <div className="portfolio-caption">
                    <h4>Bootcamp</h4>
                    <p>Startup bootcamp program serves as the Silicon Valley "launching-pad" for startups that have achieved
                      traction with product or services and are looking at go to market strategies to scale their business and
                      technology.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item text-center">
                  <img className="img-fluid" src="/img/portfolio/05-thumbnail.jpg" alt="" />
                  <div className="portfolio-caption">
                    <h4>Funding</h4>
                    <p>Different types of startup funding are a primer for new founders. Choosing the
                     right option will not only better your chances of attracting the best investor for your operation, but may
                   even help you avoid issues in the future.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item text-center">
                  <img className="img-fluid" src="/img/portfolio/06-thumbnail.jpg" alt="" />
                  <div className="portfolio-caption">
                    <h4>Corporate</h4>
                    <p>We understand the challenges of global industry leaders. The best companies have one
                      common denominator — they’ve leveraged emerging technology to transform their business and industry
                    from the outside in. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Programs</h2>
                <h4 className="section-subheading">
                  Startup Benefits to participate in our Programs include:
                  no equity requirements, gain brand and product exposure, connect with leading industry mentors,
                  validate your product through pilot testing with corporate collaborators, accelerate growth through
                  industry knowledge and startup fundamentals, get real-time feedback during development, introduction
                  to industry leading corporations and potential investment opportunities.
                </h4>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-users aria-hidden='true' fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Incubator</h4>
                <p>
                  An ncubator is set up to reduce the chances of failure of early-stage startups and to help the economic
                  viability and growth of startups. Incubators are set up to create sustainable and strong
                  entrepreneurial support system and enable young entrepreneurs to find
                  support and resources to build successful startups.  Here is what you should look for in a business incubator
                  before you choose a program: space and design, community resources, team, network activities, partners and
                  links, service providers.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Accelerator</h4>
                <p>Our startup accelerator programs bring together the industry's most disruptive startups and
                  progressive corporates to fuel cross-industry innovation and set a new standard for industry
                  innovation. Unlike other accelerator programs, this program is designed to be an ongoing innovation
                  platform that will result in a continuous stream of commercially viable solutions. Startups in the
                  program will have the opportunity to work hand-in-hand with the corporate collaborators in a
                  dedicated product validation program.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-book aria-hidden='true' fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Bootcamp</h4>
                <p>
                  Startup Bootcamp is a one week program designed for startups with product or services who are looking at scale up
                  and growth. The program includes curated sessions and one to one mentoring by experienced tech professionals and
                  Mentors. During the program, the startups will also network and interact with Corporates and pitch to Silicon
                  Valley Investors. Our campus is located in the heart of Silicon Valley. Through perspective-widening conversations
                   and genuine relationships we ignite “Eureka” moments.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/*Funding */}
        <section className="bg-light" id="funding">
          <div className="container">
            <div className="row  text-center">
              <div classNafa fa-book aria-hidden='true' >
                <h2 className="section-heading text-uppercase">Funding</h2>
                <h3>Funding for startups is available in all sorts of forms, and an entrepreneur would be wise to
                  consider and evaluate all forms of capital available for each stage of the business.</h3>
              </div>
            </div>
            <div className="abouts">
              <img src="/img/about/1.jpg" alt="" />
              <div class="desc">
                <h4 className="subheading">Personal Savings, Family and Friends</h4>
                <p> This is the most appealing source of financing, because you use your own money to jumpstart your
                  business and don’t owe anyone else in the process. You can request your friends, family or close
                  associates to help kick off a business to a point where it can seek and get other types of funding.
                  <ul>
                    <li>
                      Pros: You have total control of your business, and faster funding process and flexible payment methods.
                   </li>
                    <li>
                      Cons: If the business fails, all the hard work that you had put into your savings will go to waste.                   </li>
                  </ul></p>
              </div>
            </div>
            <div className="abouts abouts-right">
              <img src="/img/about/2.jpg" alt="" />
              <div className="desc">
                <h4 className="subheading">Crowdfunding</h4>
                <p>This involves funding a business by taking small amounts of capital from a large
                 number of people, usually via the internet. This type of funding makes use of the vast networks you’ve of
                 your friends, family and colleagues via different social platforms to get the word out about the business,
                 with the goal of attracting new investors.
                 <ul>
                    <li>
                      Pros: Has the potential of expanding a business by getting a pool of investors who can help raise funds.
                   </li>
                    <li>
                      Cons: Requires time and dedication before results may be realized.                   </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="abouts">
              <img src="/img/about/3.jpg" alt="" />
              <div className="desc">
                <h4 className="subheading">Angel Investors</h4>
                <p>Angel investors are wealthy individuals who will provide funding in exchange for a share of equity in the
                  business. Some investors work in groups and screen deals together before providing funds, while most work
                  on their own.
                  <ul>
                    <li>
                      Pros: Offers valuable advice and guidance since they have experience in the industry you’re in, and flexible business terms.
                   </li>
                    <li>
                      Cons: You may be forced to give up control of your business to some extent.
                   </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="abouts abouts-right">
              <img src="/img/about/4.jpg" alt="" />
              <div className="desc">
                <h4 className="subheading"> Venture Capital</h4>
                <p>Put in a considerable amount of money in exchange for equity in the business, and get returns when the business
                  goes public or is acquired by another company. Venture capitalists are all about the money, and only invest in
                  businesses that have the potential of providing good returns on their investment.
                 <ul>
                    <li>
                      Pros: Provides funding, offer expertise and mentorship to help develop the business, gives the business
                      immediate credibility and opens doors for future investors and partners.
                   </li>
                    <li>
                      Cons: Might need to give up a large chunk of your business due to the significant amount of funding provided.                   </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="timeline-inverted">
            <h4>Be Part Of Our Story!</h4>
          </div> */}
        </section>


        {/* Corporate */}
        < section id="corporate" >
          <div className="container">

            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Corporate</h2>
                <div id="corp">
                  <h3 className="section-subheading corp">Catalyze Your Business Transformation With StartHub.
                </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4 className="section-subheading">We Understand The Challenges Of Global Industry Leaders
                </h4>
                <p>
                  The best and largest companies by market cap have one common denominator — they’ve leveraged emerging
                  technology to transform their business and industry from the outside in. Those who fail to innovate
                  will become irrelevant in tomorrow’s business and societal landscape.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="abouts" id="corp-pad">
                    <img src="/img/corporate.jpg" className="corp-image" />
                    <div className="desc">
                      <p>
                        No matter where your business is in innovation maturity, StartHub can help you. We offer seven products that can
                        be flexed to help solve your corporation's key challenges. </p>
                      <div id="text-corp">
                        <ul>
                          <li>Technology Exploration - Explore industry, innovation, and technology landscapes to identify opportunity areas
                            within your business to pursue.
                      </li>
                          <li>Concept Design - Design out a variety of concepts that offer transformative solutions to your opportunity areas.
                      </li>
                          <li>Solution Design - Design out your concept idea into a viable innovation solution.
                      </li>
                          <li>Prototype Testing - Build out prototypes of your solution feature set and pressure test it in a proof of concept.
                      </li>
                          <li>Proof of Concept - Build out a holistic prototype of your solution and optimize it in a proof of concept.
                      </li>
                          <li>Discovery - Uncover and connect with the most promising and qualified startups within an identified opportunity area.
                      </li>
                          <li>Industry collaborative - Develop pilot partnerships with emerging growth companies within a specific industry focus.
                      </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a className="btn btn-primary btn-xl text-uppercase" href="/signup">Let's Connect</a>
            </div>
          </div>
        </section >

        {/* Contact */}
        < section className="bg-light" id="contact" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading">Have a question or looking for a quote? Contact us!</h3>
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
                  <div className="text-center">
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section >
        <br /><br /><br /><br /><br /><br /></div >
    );
  }
}

export default Splash;
