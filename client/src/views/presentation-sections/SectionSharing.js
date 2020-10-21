import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionSharing() {
  return (
    <>
      <div className="section section-sharing section-dark" id="demoPay">
        <Container>
          <Row>
            <div className="title text-center">
              <h3 className="title">Ready to grab access to these powerful tools?</h3>
              <p className="description">
                You have <b>Unlimited Access</b> and{" "}
                <b>Premium Support</b> on each trade search. You also
                have <b>72 hours</b> to request a refund if you're not happy
                with your purchase.
              </p>
              <br />
            </div>
            <Col className="ml-auto mr-auto" md="8">
              <div className="space-top" />
              <Row>
                <Col md="6">
                  <Card className="card-pricing">
                    <CardBody>
                      <div className="card-icon">
                        <span className="icon-simple">
                          <i className="nc-icon nc-single-02" />
                        </span>
                      </div>
                      <CardTitle tag="h3">$79</CardTitle>
                      <p>/Month(Limited)</p>
                      <p className="card-description">
                        For individual traders. Trading your personal account, or for a prop firm, you will have access to
                         the tools and comunity that make your life easier.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          target="_blank"
                          color="danger"
                          href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-presentation-page"
                        >
                          Buy Now
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-pricing">
                    <CardBody>
                      <div className="card-icon">
                        <span className="icon-simple">
                          <i className="nc-icon nc-bank" />
                        </span>
                      </div>
                      <CardTitle tag="h3">$1300</CardTitle>
                      <p>/Lifetime(Limited)</p>
                      <p className="card-description">
                        For entrepreneurs and other business's looking to sell signals and add
                         custom features to their website. 
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          target="_blank"
                          color="danger"
                          href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-presentation-page"
                        >
                          Buy Now
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col className="offset-md-2 text-center" md="8" />
          </Row>
          <div className="text-center">
            <span>Pay one time with:</span>
            <i className="fa fa-cc-paypal fa-pay mr-1" />
            <i className="fa fa-cc-visa fa-pay mr-1" />
            <i className="fa fa-cc-mastercard fa-pay mr-1" />
            <i className="fa fa-cc-amex fa-pay" />
            <br />
            <br />
          </div>
          <div className="title text-center">
            <h3>Thank you for sharing!</h3>
            <br />
            <Button className="btn-round mr-1" color="twitter" id="twitter" href="https://twitter.com/HubcapFounder">
              <i className="fa fa-twitter mr-1" />
              Twitter
            </Button>
            <Button className="btn-round mr-1" color="facebook" id="facebook" href="https://www.facebook.com/Hubcap-Technologies-103951614784210">
              <i className="fa fa-facebook-square mr-1" />
              Facebook
            </Button>
            <Button className="btn-round" color="google" id="google">
              <i className="fa fa-google-plus mr-1" />
              Google
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSharing;
