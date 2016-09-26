import React, { Component } from 'react';

module.exports = (_items) => {
    const _ItemList = _items.map((_item, i) => {
    let bgColor   = 'ffffff';
    let randomHex = (Math.random()*0xFFFFFF<<0).toString(16);
    return (
        <div className='col-md-3 col-sm-6' key={i} id={_item._id}>
          <div className='thumbnail'>
            <div className='caption'>
              <img src={'http://placehold.it/400/'+bgColor+'/'+randomHex+'?text='+ _item.sku} alt={_item.name} className='img-responsive' />
              <h4>{_item.name}</h4>
              <span>{_item.description}</span>     
              <h5>{'$' + _item.price}</h5>         
              <div className="text-right">
                <AddToCartButton id={_item._id}/>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return _ItemList;
}

class AddToCartButton extends Component {
  render() {
    return (
      <button onClick={this._addToCartHandler} type='button' className='btn btn-default btn-lg'>
        <i className='fa fa-cart-plus'></i>
      </button>
    );
  }
  _addToCartHandler(){
    let newItem = {
      id: this.props.id,
      qty: this.state.qty
    };
  }
}
