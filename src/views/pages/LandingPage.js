import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2t8pch', 'template_yb9ihpj', form.current, 'ntr-It2D3hMbyKngJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/avatar_u2x9yrhbqdq.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Michael Mwanza <br />
              </h4>
              <h6 className="description">Fullstack software developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Hello, my name is Michael N Mwanza. 
                I am a fullstack developer from Zimbabwe. 
                I have experience building API's in Django and Laravel. 
                On the frontend, I have worked with reactjs. I am self-motivated 
                and eager to keep learning and improve my skills. I am a professional 
                who listens to what my client wants and I do my best to give the best results. 
                My background in software engineering comes from the Alx Software Engineering 
                program.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Competencies</h2>
                <h5 className="description">
                  These are the skills I have managed to accummulate.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Languages and frameworks
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                        width="50px"
                        alt="..."
                        src={require("assets/img/js.png")}
                      />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Javascript</h4>
                    <p className="description">
                    <h5>skill level</h5>
                      Coding data structures and algorithms in javascript.
                      Dynamic programming.
                      Front end development with vanilla javascript.
                      Setting up csrf token on forms
                      Api integration
                    <h5>Frameworks</h5>
                      Reactjs
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                        width="50px"
                        alt="..."
                        src={require("assets/img/python.png")}
                      />
                  </div>
                  <div className="description">
                    <h4 className="info-title">python</h4>
                    <p>
                      <h5>skill level</h5>
                      Coding data structures and algorithms.
                      Backend development.
                      Third party api integration
                      Testing
                    <h5>Frameworks</h5>
                      Flask,
                      Django
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                        width="50px"
                        alt="..."
                        src={require("assets/img/php.png")}
                      />
                  </div>
                  <div className="description">
                    <h4 className="info-title">php</h4>
                    <p>
                      <h5>skill level</h5>
                      Backend development
                      Crud with mysqli
                      Third party api integration
                      Testing
                    <h5>Frameworks</h5>
                      Laravel
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                        width="50px"
                        alt="..."
                        src={require("assets/img/linux.png")}
                      />
                  </div>
                  <div className="description">
                    <h4 className="info-title">DeveOps</h4>
                    <p>
                      <h5>skill level</h5>
                      Setting up mysql on apache2 or Nginx
                      Version control with git
                      Linux server
                      Ssh setup
                      Lamp and Lemp
                      Setting up firewall as well as giving permission to certain routes

                      <h5>Databases</h5>
                      No sql and sql
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Projects</h2>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/booking.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bus Booking System</CardTitle>
                        <h6 className="card-category">React Django Project</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The bus booking system was a collaboration between myself and another Alx 
                      student from another country. For this project, we applied the skills we 
                      learned during the Alx program. We used version control with GitHub, Rest 
                      APIs, Django framework, testing, pagination, and other skills. A demo is 
                      available on request.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/pocket.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pocket Geologist</CardTitle>
                        <h6 className="card-category">React laravel Project</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The Pocket Geologist was my first full-stack project with databases 
                      and complex querying. I applied skills learned from my data structures 
                      and algorithms to make it scalable, avoiding structures like nested 
                      loops with high time complexity. This project was Inspired by my first 
                      degree which is geology. It's a tool to help geologists identify rocks 
                      and minerals by their properties.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              {/* <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="section landing-section text-center">
              <h2>Contact Me</h2>
            <Container className="col-8">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className = "row">
                <div className="col">
              <input type="text" name="user_name" className="form-control" placeholder="name"/>
              </div>
              <div className="col">
              <input type="email" name="user_email" className="form-control" placeholder="email"/>
              </div>
              </div>
              <br></br>
              <div className="row">
              <div className="col">
              <textarea name="message" className="form-control" placeholder="write message ..."/>
              </div>
              </div>
              <br></br>
              <div className ="row">
              <div className="col text-center">
              <input type="submit" value="Send" className="btn btn-lg btn-danger"/>
              </div>
              </div>
            </form>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
