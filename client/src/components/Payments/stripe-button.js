import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
    Button
  } from "reactstrap";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name= 'Personal'
        description= 'Monthly subscription'
        amount= {8900}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button
            className="btn-round"
            color="success"
            //href="/api/stripe/2"
            onClick={(e) => e.preventDefault()}
            outline
        >
            Current plan
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);