/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/HubcapFounder"
                    target="_blank"
                    className="mr-1"
                  >
                    Jason Maynard
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    target="_blank"
                    className="mr-1"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by Jason Maynard
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
