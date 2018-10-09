import React from "react";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";
import "./Splash.css"

class Splash extends React.Component {
  render() {
    return (
      <div>
        <MarketingNavbar />
        
        {/* Header */}
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading intro-text">StartHub</h2>
                <h3 className="section-subheading">
                  We provide speed and direction to the world’s top tech startup and corporate innovators.
                </h3>
                 <a className="btn btn-primary btn-xl text-uppercase" href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </header>

        {/* Portfolio */}
        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">StartHub</h2>
                <h3 className="section-subheading">
                  We provide speed and direction to the world’s top tech startup and corporate innovators.
                </h3>
                 <a className="btn btn-primary btn-xl text-uppercase" href="/signup">Sign Up</a>
              </div>
            </div>
            <div className="row service-section">
              <div  id="workspace" className="col-md-4 col-sm-6 portfolio-item text-center">
                <img className="img-fluid" src="/img/portfolio/01-thumbnail.jpg" alt="" />
                <div className="portfolio-caption text-center">
                  <h4>Workspace</h4>
                  <p className="text-center">Whether you need a desk, office suite, or entire HQ, we create environments
                  that increase productivity, innovation, and collaboration. Recruitment,
                  retention, innovation, and productivity now require more. We offer the opportunity to reimagine employees’
                  days through refreshing design, engaging community, and benefits for all.</p>
                </div>
              </div>
              <div  id="incubator" className="col-md-4 col-sm-6 portfolio-item text-center">
                <img className="img-fluid" src="/img/portfolio/02-thumbnail.jpg" alt="" />
                <div className="portfolio-caption text-center">
                  <h4>Incubator</h4>
                  <p className="text-center">The main purpose of an incubator is to help startups to grow. They are
                  collaborative programs which help people solve problems associated with launching a startup by providing
                   a space to work, seed funding, mentoring, training and other benefits. They tend to allow startups to
                   base themselves within the incubator for months or years. </p>
                </div>
              </div>
              <div id="accelerator" className="col-md-4 col-sm-6 portfolio-item text-center">
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
                <div id="mentorship" className="col-md-4 col-sm-6 portfolio-item text-center">
                  <img className="img-fluid" src="/img/portfolio/04-thumbnail.jpg" alt="" />
                  <div className="portfolio-caption">
                    <h4>Mentorship</h4>
                    <p>We connect founders with relevant industry mentors. Our mentors provide targeted
                     access to opaque industries. There’s no fluff or grandstanding, just the exposure and insights that help
                    take a startup to the next level.</p>
                  </div>
                </div>
                <div id="funding" className="col-md-4 col-sm-6 portfolio-item text-center">
                  <img className="img-fluid" src="/img/portfolio/05-thumbnail.jpg" alt="" />
                  <div className="portfolio-caption">
                    <h4>Funding</h4>
                    <p>The 7 different types of startup funding are a primer for new founders. Choosing the
                     right option will not only better your chances of attracting the best investor for your operation, but may
                   even help you avoid issues in the future.</p>
                  </div>
                </div>
                <div id="corporate" className="col-md-4 col-sm-6 portfolio-item text-center">
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



        {/* Services */}
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">
                  Language Link is a full-service provider of linguistic services including
                  translation, interpreting, localization and language training. We deliver top-quality language solutions
                  across a wide range of media and communication channels. Our linguists work in all fields utilizing
                  state-of-the-art technology. Our services include, but are not limited to:
                </h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-users aria-hidden='true' fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Translation</h4>
                <p className="text-muted">
                  With over 20 years of experience providing professional
                  translation services throughout the U.S. and internationally,
                  the Language Link team offers the versatility of certified
                  translation across multiple industries, with the personalized
                  and high-quality attention to detail that every translation
                  project needs.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Interpretation</h4>
                <p className="text-muted">Our network of trained and experienced interpreters are ready to speak your language in
                  any venue and field. Our interpreting services are available over the phone or on-site anywhere in the world,
                  and
            include consecutive, conference and telephonic interpreting.</p>
              </div>
              <div className="col-md-4">

              </div>
            </div>
          </div>
        </section>


        {/* About */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div classNafa fa-book aria-hidden='true' >

                <h4 className="service-heading">Training</h4>
                <p className="text-muted">Language Link was founded by interpreters, and today one of our main pillars of
                  business is language training the next generation of interpreters to break down the language barriers. We offer
                </p>
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Wherever you do business. We speak the language.</h3>
              </div>
            </div>
            <div className="abouts">
              <img src="/img/about/1.jpg" alt="" />
              <div class="desc">
                <h4 className="subheading">Why Language Links?</h4>
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
            <div className="abouts abouts-right">
              <img src="/img/about/2.jpg" alt="" />
              <div className="desc">
                <h4 className="subheading">Project Management</h4>
                <p className="text-muted">Our success isn’t just due to our translators and interpreters. We also provide
                  every
                  client with a dedicated Account and Project Manager who have experience guiding projects and
                  eliminating
                  inefficiencies so they're done on time and within budget. Lastly, we save you time and
                    money by using the best and most cutting-edge translation software tools.</p>
              </div>
            </div>
            <div className="abouts">
              <img src="/img/about/3.jpg" alt="" />
              <div className="desc">
                <h4 className="subheading">Our Philosophy</h4>
                <p className="text-muted">Language Links is a performance-driven company that guarantees timely and high
                  quality
                  service. We value clarity, professionalism and precision. Our goal is to create long-term
                  relationships
                  with clients and provide each one with personalized service. We also prioritize working with the
                  best
                    new technologies so we can offer our clients the very best service.</p>
              </div>
            </div>
          </div>

          {/* <div className="timeline-inverted">
            <h4>Be Part Of Our Story!</h4>
          </div> */}
        </section>

      {/* Funding */ }
      < section id = "funding" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="section-subheading text-center">
                Seven Types of Funding Sources for your Startup
                </h3>
              <p>
                Many entrepreneurs looking to start a business get confused on the best source of funding to seek for
                   their startup. With the many options there are, choosing the ideal source of financing can be an
                   overwhelming process; however, weighing the pros and cons of each source will help you choose the
                   ideal one to go ahead with. Listed below are some common funding sources, with a brief explanation of
                   each that will help simplify things for you.
                   <br />
                1. Personal Savings:
                  <br />
                This is the most appealing source of financing, because you use your own money to jumpstart your
                business and don’t owe anyone else in the process.
                  <br />
                Pros:
                  <br />
                You have total control of your business, and you may do as you please with your money.
                There’s this satisfaction that you are using your own cash to fund the business.
                  <br />
                Cons:
                  <br />
                If the business fails, all the hard work that you had put into your savings will go to waste.
                You may miss out on otherwise valuable guidance and mentorship from angel investors and venture capitalists.
                  <br />
                2. Family and Friends:
  
                 You can request your friends, family or close associates to help fund your business. This type of funding has more to do with the relationship itself, rather than the assessment of a feasible business plan. The aim of this type of funding is to help kick off a business to a point where it can seek and get other types of funding.
  
                 Pros:
  
                 Faster funding process and flexible payment methods.
                 Cons:
  
                 Family and friends provide the funding without assessing the viability of a business plan itself.
                 Brings nothing to the table except for the initial capital investment.
                 3. Crowdfunding:
  
                 This involves funding a business by taking small amounts of capital from a large number of people, usually via the internet. This type of funding makes use of the vast networks you’ve of your friends, family and colleagues via different social platforms to get the word out about the business, with the goal of attracting new investors.
  
                 Pros:
  
                 Has the potential of expanding a business by getting a pool of investors who can help raise funds.
                 Cons:
  
                 Requires time and dedication before results may be realized.
                 4. Angel Investors:
  
                 Angel investors are wealthy individuals who will provide funding in exchange for a share of equity in the business. Some investors work in groups and screen deals together before providing funds, while most work on their own.
  
                 Pros:
  
                 Angel investors can offer valuable advice and guidance since they have experience in the industry you’re in.
                 Flexible business terms.
                 Cons:
  
                 You may be forced to give up control of your business to some extent.
                 5. Venture Capital:
  
                 Venture capitalists are investors who put in a considerable amount of money in exchange for equity in the business, and get returns when the business goes public or is acquired by another company. Venture capitalists are all about the money, and only invest in businesses that have the potential of providing good returns on their investment
  
                 Pros:
  
                 Venture capitalists not only provide funding, but can offer expertise and mentorship to help develop the business.
                 Venture capital funding gives the business immediate credibility and opens other doors to a wide network of important individuals, such as future investors and partners.
                 Cons:
  
                 You may be forced to give up a large chunk of your business due to the significant amount of funding provided.
                 6. Bank Loans:
  
                 Bank loans are a popular source of funding for many startups. Before applying for a bank loan, it’s important to ensure that you are well educated about the various options available, and the interest rates that come with each option.
  
                 Pros:
  
                 There are different funding options depending on your needs.
                 The funding process is relatively quick if you qualify.
                 You don’t have to give up control of your business.
                 Cons:
  
                 Requires a lot of documentation, which can be tiring and time-consuming.
                 You need educate yourself about the best option available for you; otherwise, you might end up choosing a deal that will eventually hurt your business.
                 The money has to be paid back whether the business succeeds or not, failing which may lead to loss of your assets, if any.
                 7. Small Business Administration (SBA) Loans:
  
                 This involves funding from a government administration devoted to assisting small businesses to succeed. SBA’s help small businesses get capital and ensures that a certain percentage of contracts are awarded to the small businesses.
  
                 Pros:
  
                 Helps improve the relationship between lenders and borrowers.
                 Increased chances of obtaining a bank loan if the SBA loan is properly managed.
                 Cons:
  
                 Strict qualification guidelines.
                 To help you choose the ideal funding source for your business, make sure to review your financial needs, qualifications, and the urgency of financing. Some funding sources need certain requirements to be completed before you qualify. It’s thus important to ensure you are well educated on the various options available to you, and their respective advantages and disadvantages.
              </p>
            </div>
          </div>
        </div>
    </section >


      {/* Team */ }
      < section className = "bg-light" id = "team" >
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
    </section >

      {/* Contact */ }
      <br /><br /><br /><br /><br />
      < section id = "contact" >
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
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
    </section >
    <br /><br /><br /><br /><br /></div >
    );
  }
}

export default Splash;
