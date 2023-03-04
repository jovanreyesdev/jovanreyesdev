import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

function Footer() {
  return (
    <footer className="footer pb-5">
      <Container>
        <Row>
          <Col md={6} className="justify-content-center">
            <h3 className="mb-5 text-center lh-base">
              Let&apos;s make something new,
              <br />
              different and more meaningful
              <br />
              or make things more visual
              <br />
              or conceptual?
              {' '}
              <b>Just say Hello!</b>
            </h3>
            <ListGroup className="mx-auto mt-0 mb-3" style={{ width: '20rem' }}>
              <ListGroup.Item>+639 69 409 5699</ListGroup.Item>
              <ListGroup.Item>jovan.reyes.dev@gmail.com</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className="justify-content-center mx-auto my-0">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faInstagram} />
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faLinkedin} />
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faGithub} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="d-flex align-items-center justify-content-center" md={6}>
            <Card style={{ width: '25rem' }} className="contact-form p-5">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Tell me what's up" />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button size="lg" variant="primary" type="submit" className="align-selft-right">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ marginTop: '5rem' }}>
            <span>
              Copyright © 2023 JovanR Portfolios, All rights&nbsp;
              Reserved.
            </span>
            <br />
            <span>
              Created by&nbsp;
              <b>jovanreyesdev</b>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
