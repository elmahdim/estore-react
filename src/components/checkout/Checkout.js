import React, { Component } from 'react';
import {Link} from 'react-router';

import Hero from '../catalog/Hero';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      hero: {
        title: 'Checkout',
        subtitle: 'Consectetur adipisicing elit.'
      }
    };
  }
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    return (
      <div className={'container component-' + currentComponent}>
        <Hero content={this.state.hero}/>
        <hr />
        <Link to='/'>Continue Shopping</Link>  
        <hr />

      </div>
    );
  }
}

export default Checkout;