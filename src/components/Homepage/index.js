import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as JRDEVLogo } from 'assets/images/jrdev.svg';
import Portrait from 'assets/images/jovanportraitbrush.png';
import BeachShot from 'assets/images/jovanbeach.png';
import Avatar1 from 'assets/images/avatars/avatar1.webp';
import Avatar2 from 'assets/images/avatars/avatar2.webp';
import Avatar3 from 'assets/images/avatars/avatar3.webp';

import Lear from 'assets/images/clients/lear.png';
import Merck from 'assets/images/clients/merck.png';
import Smartbag from 'assets/images/clients/smartbag.png';
import Maxicare from 'assets/images/clients/maxicare.png';
import _1800a from 'assets/images/clients/1800accountant.png';

import './index.scss';

function Homepage() {
  const services = ['Web Development', 'Video Editing', 'Photography'];

  return (
    <div>
      <Container className="position-relative">
        <JRDEVLogo className="jrdev" />
        <Row className="pb-5 pt-5 pt-xl-0">
          <Col md={5} className="align-self-center">
            <h1 className="herotitle mb-5">
              <span className="d-block mb-3">
                Hello! I am&nbsp;
                <span className="bluetext">Jovan</span>
              </span>
              <span className="gloock">
                Professional
                <br />
                UI/UX Designer
                <br />
                & Web Developer
              </span>
            </h1>
            <Button
              size="lg"
              variant="primary"
            >
              Contact me
            </Button>
          </Col>
          <Col md={7} className="d-lg-block d-flex align-items-center justify-content-center">
            <Image
              alt="Portrait"
              src={Portrait}
              className="portrait"
            />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col md={12} className="justify-content-center mb-5">
            <span className="d-block text-center">MY SERVICES &</span>
            <h2 className="text-center fw-bold">
              Expertise Area
            </h2>
          </Col>
          {
            services.map((service) => (
              <Col key={service} md={4}>
                <Card className="mx-auto mb-3 mb-md-0" style={{ border: 0 }}>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{service}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title
                      and make up the bulk of the card&apos;s content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
        <Row className="pt-5 pb-5">
          <Col md={12} className="justify-content-center mb-md-3 mb-lg-5 col-md-12">
            <span className="d-block text-center">ABOUT ME &</span>
            <h2 className="text-center fw-bold">
              About the things I do
            </h2>
          </Col>
          <Col className="position-relative my-5 my-md-0 d-flex align-items-center justify-content-center beachshot-container" md={6} lg={5}>
            <Image
              alt="Jovan in beach"
              src={BeachShot}
              className="beachshot"
            />
          </Col>
          <Col className="d-flex justify-content-center" md={6} lg={7}>
            <div>
              I&apos;m a software engineer with a passion for coding.
              I love to spend my free time tinkering with new technologies
              and building applications that solve real-world problems.
              <br />
              <br />
              Ever since I was a kid, I&apos;ve been fascinated by the power of
              computers and the endless possibilities they offer. Over the
              years, I&apos;ve honed my skills and gained experience in a
              variety of programming languages and frameworks, including
              Java, Python, and React.
              <br />
              <br />
              While my professional work keeps me busy, I always make time
              for my hobby projects. I find that coding is a great way
              to unwind and explore new ideas, and I&apos;m constantly
              learning new things as I work on personal projects.
              <br />
              <br />
              When I&apos;m not coding, you can find me hiking in the
              great outdoors or freediving in the deep blue sea.
              I&apos;m always up for a good challenge, whether
              it&apos;s a tough coding problem or a new adventure.
              I&apos;m excited to see where my passion for coding takes me next!
              <br />
              <br />
              - J
            </div>
          </Col>
        </Row>
        <Row className="pt-5 pb-5">
          <Col md={12} className="justify-content-center mb-5">
            <span className="d-block text-center">Client Review &</span>
            <h2 className="text-center fw-bold">
              What they say
            </h2>
          </Col>
          <Col md={4}>
            <Card className="m-auto testimonial-card mt-md-3 mb-3" bg="light" text="dark">
              <Card.Body>
                <Image className="avatar d-block m-auto mb-3" src={Avatar1} roundedCircle />
                <Card.Title className="m-0 text-center">Maria Kate</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">Photographer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus et deleniti nesciunt sint eligendi reprehenderit
                  reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-auto testimonial-card center-card mb-3" bg="light" text="dark">
              <Card.Body>
                <Image className="avatar d-block m-auto mb-3" src={Avatar2} roundedCircle />
                <Card.Title className="m-0 text-center">John Doe</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">Web Developer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus et deleniti nesciunt sint eligendi reprehenderit
                  reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-auto testimonial-card mt-md-3 mb-3" bg="light" text="dark">
              <Card.Body>
                <Image className="avatar d-block m-auto mb-3" src={Avatar3} roundedCircle />
                <Card.Title className="m-0 text-center">Anna Deynah</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">UX Designer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus et deleniti nesciunt sint eligendi reprehenderit
                  reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col md={12} className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-md-12">
            <Image className="my-4 my-lg-0" width="150px" alt="Lear Logo" src={Lear} />
            <Image className="my-4 my-lg-0" width="150px" alt="Merck Logo" src={Merck} />
            <Image className="my-4 my-lg-0" width="150px" alt="Smartbag Logo" src={Smartbag} />
            <Image className="my-4 my-lg-0" width="150px" alt="Maxicare Logo" src={Maxicare} />
            <Image className="my-4 my-lg-0" width="150px" alt="1800Accountant Logo" src={_1800a} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
