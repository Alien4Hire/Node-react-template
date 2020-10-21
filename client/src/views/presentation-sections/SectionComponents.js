import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-hubcap.png")}
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/chart-presentation.png")}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/presentation-page/share-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/presentation-page/Screener Page - sample1.png")}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/presentation-page/coloured-card.png")}
              />
              {/* <img
                alt="..."
                className="social-img"
                src={require("assets/img/presentation-page/social-row.png")}
              /> */}
              {/* <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/presentation-page/pin-btn.png")}
              /> */}
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">Components Package</h3>
              <h6 className="category">Your trading toolbox</h6>
              <h5 className="description">
                We re-designed all of the common trading tools as well as added a few of our own.
                Every component has been stripped down to only the essential features and rebuilt so they are both easy to learn,
                 but also work perfectly to help you make more money with your trading strategy.

              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
