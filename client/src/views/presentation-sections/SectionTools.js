import React from "react";

// reactstrap components
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col } from "reactstrap";
import '../../assets/scss/myImport/css/bootstrap.css';
import '../../assets/scss/myImport/css/fonts.css';
//import '../../assets/scss/myImport/css/style.css';
// core components

function SectionTools() {
  return (
    <>
      <section class="section-md bg-default text-center">
        <div class="container">
          <h4 class="heading-decorated">Tools</h4>
          <div class="row row-50 justify-content-md-center justify-content-lg-start">
            <div class="col-md-6 col-lg-4">
              {/* <!-- Blurb circle--> */}
              <article class="blurb blurb-minimal">
                <div class="unit flex-row unit-spacing-md">
                  <div class="unit-left">
                    <div class="blurb-minimal__icon"><span class="icon linear-icon-feather"></span></div>
                  </div>
                  <div class="unit-body">
                    <p class="blurb__title"><a class="heading-6" href="/">Screeners</a></p>
                    <p>I've spent years designing custom indicators, and now you can screen stocks based on these indicators</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              {/* <!-- Blurb circle--> */}
              <article class="blurb blurb-minimal">
                <div class="unit flex-row unit-spacing-md">
                  <div class="unit-left">
                    <div class="blurb-minimal__icon"><span class="icon linear-icon-magic-wand"></span></div>
                  </div>
                  <div class="unit-body">
                    <p class="blurb__title"><a class="heading-6" href="/">Trading Lab</a></p>
                    <p>Where should you put your money this week? Forex, Stocks, Crypto. Find out where the money is headed. </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              {/* <!-- Blurb circle--> */}
              <article class="blurb blurb-minimal">
                <div class="unit flex-row unit-spacing-md">
                  <div class="unit-left">
                    <div class="blurb-minimal__icon"><span class="icon linear-icon-bag2"></span></div>
                  </div>
                  <div class="unit-body">
                    <p class="blurb__title"><a class="heading-6" href="/">Charting</a></p>
                    <p>Our charts have plots for exact entries and exits to take out all the guesswork.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTools;
