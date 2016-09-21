import React, { Component } from 'react';
import Hero from './Hero';
import Item from './Item';
import CartWidget from './CartWidget';

class Catalog extends Component {
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    return (
      <div className={'container component-' + currentComponent}>
        <Hero />
        <div className='row text-center'>
          <Item />
        </div>
        <CartWidget />
      </div>
    );
  }
}

export default Catalog;
