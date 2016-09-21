import React, { Component } from 'react';
import Hero from './Hero';
import Item from './Item';
import CartWidget from './CartWidget';

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      hero: {
        title: 'Catalog',
        subtitle: 'Ipsa, ipsam, eligendi.'
      }
    };
  }
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    return (
      <div className={'container component-' + currentComponent}>
        <Hero content={this.state.hero}/>
        <div className='row text-center'>
          <Item />
        </div>
        <CartWidget />
      </div>
    );
  }
}

export default Catalog;
