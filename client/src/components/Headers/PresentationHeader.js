/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import styled from 'styled-components';



// core comments

function PresentationHeader() {

  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Interactive Trading</h1>
                <div className="type">PRO</div>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
                Learn how to make money trading the Stock market
              </h2>
            </Container>
          </div>
          <h6 className="category category-absolute">
            {/* Designed and coded by{" "} */}
            <p>
                Financial markets are complicated and seemingly irrational. So many wannabe traders start, but then give up and deem the market imposible long before they really
                 understand how it works. I've designed the tools on this website with that in mind, think of it like "Trading with Training Wheels". You can use enough of your own strategy to make it a powerful tool, but
                  there are stops and preset settings in place to keep you from overfocusing on the wrong things.

            </p>
          </h6>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
