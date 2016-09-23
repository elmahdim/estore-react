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
      },
      items: []
    };
    this._dataHandler = this._dataHandler.bind(this);
  }
  componentDidMount(){
    this._dataHandler('http://private-2cb41e-estorereact.apiary-mock.com/items');
  }
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    let items = Item(this.state.items);
    return (
      <div className={'container component-' + currentComponent}>
        <Hero content={this.state.hero}/>
        <div className='row text-center'>
          {items}
        </div>
        <CartWidget />
      </div>
    );
  }
  _dataHandler(data){
    return fetch(data)
      .then(response => {
        if(response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then(response => {
        this.setState({
          items: response
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default Catalog;
