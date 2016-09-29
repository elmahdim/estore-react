import React, { Component } from 'react';
import CartWidget from './CartWidget';

class Items extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      qty : 1,
      incart: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      incart: localStorage.getItem('totalItems')
    });
  }

  render(){
    let data = this.props.data;
    let item = data.map((_item, i) => {
    let thumbAttrs = {
        textColor: (Math.random()*0xFFFFFF<<0).toString(16),
        background: 'ffffff',
        caption: _item.sku,
        alt: _item.name
    };
    return (
        <div className='col-md-3 col-sm-6' key={i} id={_item._id}>
          <div className='thumbnail'>
            <div className='caption'>
              <ItemThumb thumbnail={thumbAttrs} />
              <h4>{_item.name}</h4>
              <span>{_item.description}</span>     
              <h5>{'$' + _item.price}</h5>         
              <div className="text-right">
                <AddToCartBtn onClick={this._addToCartHandler.bind(this, _item._id)} />
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
    <div className='row text-center'>
      {item} 
      <CartWidget qty={this.state.incart} data={this.props.data} />
    </div>
    );
  }
  _addToCartHandler(_id){
    let item = {
      id: _id,
      qty: this.state.qty
    };
    let listHandler = this.state.list.filter(item => item.id === _id);
    (listHandler.length > 0) ? listHandler[0].qty += 1 : this.state.list.push(item);
    localStorage.setItem('itemsList', JSON.stringify(this.state.list));
    const sumQty =(items, prop) => items.reduce((a, b) => a + b[prop], 0);
    let totalItems = sumQty(this.state.list, 'qty');
    localStorage.setItem('totalItems', totalItems);
    this.setState({
      incart: localStorage.getItem('totalItems')
    });
  }
}

export default Items;

class ItemThumb extends Component {
    render(){
        return(
            <img src={'http://placehold.it/400/'+this.props.thumbnail.background+'/'+this.props.thumbnail.textColor+'?text='+ this.props.thumbnail.caption} alt={this.props.thumbnail.alt} className='img-responsive' />
        );
    }
}

class AddToCartBtn extends Component {
    render(){
        return(
            <button onClick={this.props.onClick} type='button' className='btn btn-default btn-lg'>
                <i className='fa fa-cart-plus'></i>
            </button>
        );
    }
}