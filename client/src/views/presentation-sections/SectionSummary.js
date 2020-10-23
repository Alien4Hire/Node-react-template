import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Screeners</h4>
                  <p>
                  I've spent years designing custom indicators, and now you can screen stocks based on these indicators
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sliders" fill="#e8563b" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
</svg>
                </div>
                <div className="description">
                  <h4 className="info-title">Trading Lab</h4>
                  <p>
                  Where should you put your money this week? Forex, Stocks, Crypto. Find out where the money is headed.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>ic_timeline_48px</title>
                  <g className="nc-icon-wrapper" fill="#e8563b">
                    <path d="M46 16c0 2.2-1.8 4-4 4-.36 0-.7-.04-1.02-.14l-7.12 7.1c.1.32.14.68.14 1.04 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.36.04-.72.14-1.04l-5.1-5.1c-.32.1-.68.14-1.04.14s-.72-.04-1.04-.14l-9.1 9.12c.1.32.14.66.14 1.02 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.36 0 .7.04 1.02.14l9.12-9.1c-.1-.32-.14-.68-.14-1.04 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .36-.04.72-.14 1.04l5.1 5.1c.32-.1.68-.14 1.04-.14s.72.04 1.04.14l7.1-7.12c-.1-.32-.14-.66-.14-1.02 0-2.2 1.8-4 4-4s4 1.8 4 4z"/>
                  </g>
                </svg>
                </div>
                <div className="description">
                  <h4 className="info-title">Charting</h4>
                  <p>
                  Our charts have plots for exact entries and exits to take out all the guesswork.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSummary;
