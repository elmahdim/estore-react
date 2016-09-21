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
  render() {
  	let active = this.state.isActive ? 'hidden' : '';
    return (
      <div className='cart-widget'>
      	<aside className={'sidebar ' + active}>
      		<div className='sidebar-inner'>
      			<i onClick={this._handleVisibility} className='fa fa-times close'></i>
      			<h4 className='text-capitalize'>Cart summary</h4>
      			<p>Cart subtotal (<Link to='/cart'>X item</Link>): $XX.XX</p>
      			<hr/>
      			<div className='media'>
	      			<div className='media-left'>
	      				<img src='https://placeholdit.imgix.net/~text?txtsize=18&txt=item&w=50&h=50' alt='' className='media-object'/>
	      			</div>
	      			<div className='media-body'>
	      				<h5 className='media-heading'>ger</h5>
	      				<span># x $xx.xx</span>
	      				<span className='text-muted pull-right'>$xx.xx</span>
	      			</div>
      			</div>
      			<div className='media'>
	      			<div className='media-left'>
	      				<img src='https://placeholdit.imgix.net/~text?txtsize=18&txt=item&w=50&h=50' alt='' className='media-object'/>
	      			</div>
	      			<div className='media-body'>
	      				<h5 className='media-heading'>ger</h5>
	      				<span># x $xx.xx</span>
	      				<span className='text-muted pull-right'>$xx.xx</span>
	      			</div>
      			</div>
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
          <span className='badge'>42</span>
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
