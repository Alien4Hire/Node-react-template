import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionHeaderfive() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
        {/* ********* FEATURES 5 ********* */}
        <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/the-how-photographer.jpg") +
              ")",
          }}
        >
        
          <Container>
            <Row>
              <div className="ml-auto mr-auto">
                <h2 className="title text-center">
                  Your life will be much easier
                </h2>
              </div>
            </Row>
            <Row >
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-laptop" />
                  </div>
                  <h4 className="title">Day Traders</h4>
                  <p>
                    We provide pre-made strategies to jumpstart your day trading career.
                    While you take the time to learn more about the market you can customize our tools
                     as you go to continuously improve profits.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h4 className="title">Investors</h4>
                  <p>
                    Buy and hold strategies work perfectly within our system, our average hold time is 45 days for a trade.
                    We rarely miss a trend and using our tools you will be able to identify stocks that are about to begin trending.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-spaceship" />
                  </div>
                  <h4 className="title">Entrepreneurs</h4>
                  <p>
                    Many of our clients use our tools to generate signals for their following 
                    and if you purchase the Business plan you will be able to add our tools to your own website also.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-time-alarm" />
                  </div>
                  <h4 className="title">Save Time</h4>
                  <p>
                    No matter your trading goals, our system will shave years off the learning curve to get started trading.
                     You can use the tools to select profitable trades in just 15 minutes per day so you have more time to do things you love.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        
        </div>
        {/* ********* END FEATURES 5 ********* */}
      </div>
    </>
  );
}

export default SectionHeaderfive;
