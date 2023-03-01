import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import RadialGradient from 'components/RadialGradient';
import Portrait from 'assets/images/jovanportraitbrush.png';
import BeachShot from 'assets/images/jovanbeach.png';
import Jovan from 'assets/images/portrait.jpg';
import Avatar1 from 'assets/images/avatars/avatar1.webp';
import Avatar2 from 'assets/images/avatars/avatar2.webp';
import Avatar3 from 'assets/images/avatars/avatar3.webp';

import './index.scss';

function Homepage() {
  const services = ['Web Development', 'Video Editing', 'Photography'];

  return (
    <>
    <div>
      <Container>
        <Row className="pb-5">
          <Col md={5} className="align-self-center">
            <h1 className="herotitle mb-5">
              <span className="d-block mb-3">Hello! I am <span className="bluetext">Jovan</span></span>
              <span className="gloock">
                Professional<br/>
                UI/UX Designer<br/>
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
          <Col md={7}>
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
              <Col md={4}>
                <Card className="m-auto service-card" bg="light" text="dark">
                  <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button size="sm" variant="link">Preview output</Button>
                  </Card.Body>
                  <div className="bg zigzagbg" />
                </Card>
              </Col>
            ))
          }
        </Row>
        <Row className="pt-5 pb-5">
          <Col md={12} className="justify-content-center mb-5">
            <span className="d-block text-center">ABOUT ME &</span>
            <h2 className="text-center fw-bold">
              About the things I do
            </h2>
          </Col>
          <Col className="position-relative d-flex align-items-center justify-content-center" md={5} style={{ height: '250px' }}>
            <Image
              alt="Jovan in beach"
              src={BeachShot}
              className="beachshot"
            />
          </Col>
          <Col className="d-flex justify-content-center" md={7}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu. Elementum tempus egestas sed sed risus pretium quam vulputate. Massa eget egestas purus viverra accumsan in.
              <br/>
              <br/>
              Lacus laoreet non curabitur gravida arcu ac. A diam sollicitudin tempor id eu nisl nunc mi ipsum. In fermentum et sollicitudin ac orci phasellus egestas tellus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Tempus quam pellentesque nec nam aliquam sem et tortor. Ornare arcu odio ut sem nulla pharetra diam.
              <br/>
              <br/>
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
            <Card className="m-auto service-card mt-5" bg="light" text="dark">
              <Card.Body>
                <Image className="d-block m-auto mb-3" width="120px" src={Avatar1} roundedCircle />
                <Card.Title className="m-0 text-center">Maria Kate</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">Photographer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-auto service-card center-card" bg="light" text="dark">
              <Card.Body>
                <Image className="d-block m-auto mb-3" width="120px" src={Avatar2} roundedCircle />
                <Card.Title className="m-0 text-center">John Doe</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">Web Developer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-auto service-card mt-5" bg="light" text="dark">
              <Card.Body>
                <Image className="d-block m-auto mb-3" width="120px" src={Avatar3} roundedCircle />
                <Card.Title className="m-0 text-center">Anna Deynah</Card.Title>
                <Card.Subtitle className="mt-0 mb-4 fas-6 text-muted text-center">UX Designer</Card.Subtitle>
                <Card.Text className="fas-6">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  &nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </Card.Text>
              </Card.Body>
              <div className="bg zigzagbg" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Homepage;
