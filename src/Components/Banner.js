import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require('../images/Biriyani.jpg')}
                alt="First slide"  
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require('../images/Sandwich.jpg')}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require('../images/Meals.jpg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Food for Everyone</h2>
        <p className="lead text-muted">A food is the organic!!!</p>
      </div>
    </Container>
  );
};

export default Banner;
