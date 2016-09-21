import React, { Component } from 'react';

import Hero from '../catalog/Hero';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      hero: {
        title: 'Shopping cart',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi.'
      }
    };
  }
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    return (
      <div className={'container component-' + currentComponent}>
        <Hero content={this.state.hero}/>
      </div>
    );
  }
}

export default Cart;