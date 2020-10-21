import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components

function SectionOverview() {
  return (
    <>
      <div className="section section-overview">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">Want more details?</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-money-coins" />
                      </div>
                      <CardTitle tag="h4">Bare Basics</CardTitle>
                      <p className="card-description">
                        These tools are designed to be as simple as possible to use. If you are brand new to trading 
                        or don't know where to start. Here is where your journey begins.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-watch-time" />
                      </div>
                      <CardTitle tag="h4">All About Charts</CardTitle>
                      <p className="card-description">
                        If you understand a little bit about trading, or are pretty tech savvy/ pick up on things with little 
                        direction, check out how to read our charts here.
                         
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <CardTitle tag="h4">Indicator Basics</CardTitle>
                      <p className="card-description">
                        We do most of the legwork for you with the indicators, but it is important to understand 
                        what we do so you can optimize your trading strategy.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="brown">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-align-center" />
                      </div>
                      <CardTitle tag="h4">Next Steps</CardTitle>
                      <p className="card-description">
                        Select a plan below to begin trading using our products or if you are still unsure check out 1 of our 
                        tutorials and see how we can help you! 
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
