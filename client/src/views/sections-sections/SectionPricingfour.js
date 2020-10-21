import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionPricingfour() {
  return (
    <>
      <div className="section section-pricing cd-section" id="pricing">
        {/* ********* PRICING 4 ********* */}
        <div className="pricing-4 section section-dark">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <div>
            <Row>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">Basic</h6>
                    <CardTitle tag="h1">$0</CardTitle>
                    <p style={{color: "white"}}>/Month</p>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        1 Month Trial
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Custom Screeners
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Support ticket (limit 1)
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Ebook
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Custom Indicators
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Open Source Elements
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Downgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Personal
                    </h6>
                    <CardTitle tag="h1">$89</CardTitle>
                    <p>/Month</p>
                    <ul>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Dashboard Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Custom Screeners
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Ebook
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Unlimited Support
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Custom Indicators
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Open Source Elements
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      outline
                    >
                      Current plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Business
                    </h6>
                    <CardTitle tag="h1">$1499</CardTitle>
                    <p style={{color: "white"}}>/Lifetime</p>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Dashboard Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Custom Screeners
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Ebook
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Unlimited Support
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Custom Indicators
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Open Source Elements
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Upgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
          </Container>
        
        </div>
        {/* ********* END PRICING 4 ********* */}
      </div>
    </>
  );
}

export default SectionPricingfour;
