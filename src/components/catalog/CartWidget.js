import React, { Component } from 'react';

import './CartWidget.css';

class CartWidget extends Component {
  render() {
    return (
      <div className='cart-widget'>
      	<aside className='sidebar'>
      		<div className='sidebar-inner'>
      			<i className='fa fa-times close'></i>
      			<h4 className='text-capitalize'>Cart summary</h4>
      			<p>Cart subtotal (<a href=''>X item</a>): $XX.XX</p>
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
  					<a href='' className='btn btn-default btn-block'>
  						<i className='fa fa-shopping-cart'></i> View cart
  					</a>
  				</p>
  				<a href='' className='btn btn-primary btn-block'>
  					<strong>$</strong> Checkout
  				</a>
      		</div>
      	</aside>
        <span className='fa fa-shopping-cart btn-cartwidget' data-toggle='sidebar' role='button'>
          <span className='badge'>42</span>
        </span>
      </div>
    );
  }
}

export default CartWidget;
