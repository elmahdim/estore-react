import React, { Component } from 'react';
import {Link} from 'react-router';

import './CartWidget.css';

class CartWidget extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		isActive: true
    };
    this._handleVisibility = this._handleVisibility.bind(this);
  }

  componentDidMount() {
    window.addEventListener('storage', (e) => {  
      this.setState(this.state);
    });
  }

  render() {
  	let active  = this.state.isActive ? 'hidden' : '';
    let itemsList = localStorage.getItem('itemsList');
    let data = this.props.data;
    let WidgetItems = [];

    WidgetItems = data.filter(function(item){
      for (var i = 0; i < JSON.parse(itemsList).length; i++) {
        let el = JSON.parse(itemsList)[i];
        if(el.id === item._id){
          return true;
        }
      }
      return false;
    });
    let item = WidgetItems.map((_item, i) => {
      return (
        <div className='media' key={i} id={_item._id}>
          <div className='media-left'>
            <img src={'http://placehold.it/50/2196f3/ffffff?text='+ _item.sku[0]} alt={_item.name} />
          </div>
          <div className='media-body'>
            <h5 className='media-heading'>{_item.name}</h5>
            <span># x ${_item.price}</span>
            <span className='text-muted pull-right'>$xx.xx</span>
          </div>
        </div>
      );
    });
    return (
      <div className='cart-widget text-left'>
      	<aside className={'sidebar ' + active}>
      		<div className='sidebar-inner'>
      			<i onClick={this._handleVisibility} className='fa fa-times close'></i>
      			<h4 className='text-capitalize'>Cart summary</h4>
      			<p>Cart subtotal (<Link to='/cart'>{this.props.qty} item</Link>): $XX.XX</p>
      			<hr/>
            {item}
      			<hr/>
  				<p>
  					<Link to='/cart' className='btn btn-default btn-block'>
  						<i className='fa fa-shopping-cart'></i> View cart
  					</Link>
  				</p>
  				<Link to='/checkout' className='btn btn-primary btn-block'>
  					<strong>$</strong> Checkout
  				</Link>
      		</div>
      	</aside>
        <span onClick={this._handleVisibility} className='fa fa-shopping-cart btn-cartwidget' role='button'>
          <span className='badge'>{this.props.qty}</span>
        </span>
      </div>
    );
  }
  _handleVisibility(){
  	this.setState({
        isActive: !this.state.isActive
    });
  }
}

export default CartWidget;
