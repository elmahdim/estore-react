import React, { Component } from 'react';
import {Link} from 'react-router';

import Hero from '../catalog/Hero';

import './Cart.css';

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
        <div className="row">
          <div className="col-sm-8">
            <table className={'table table-' + currentComponent}>
              <thead>
                <tr className='small text-muted'>
                  <td>Item</td>
                  <td className='text-center'>Quantity</td>
                  <td>Price</td>
                  <td>&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='https://placeholdit.imgix.net/~text?txtsize=18&txt=item&w=50&h=50' alt='' className='media-object'/>
                      </div>
                      <div className='media-body'>
                        <h5 className='media-heading'>ger</h5>
                        <span className='text-muted'>Lorem ipsum dolor sit amet</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group input-group-qty"> 
                      <span className="input-group-addon text-muted" role="button">
                        <i className="fa fa-minus"></i>
                      </span> 
                      <input className="form-control input-sm" /> 
                      <span className="input-group-addon text-muted" role="button">
                        <i className="fa fa-plus"></i>
                      </span> 
                    </div>
                  </td>
                  <td>$xx.xx</td>
                  <td>
                    <i className="fa fa-trash-o text-danger fz-h4" role="button"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='https://placeholdit.imgix.net/~text?txtsize=18&txt=item&w=50&h=50' alt='' className='media-object'/>
                      </div>
                      <div className='media-body'>
                        <h5 className='media-heading'>ger</h5>
                        <span className='text-muted'>Lorem ipsum dolor sit amet</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group input-group-qty"> 
                      <span className="input-group-addon text-muted" role="button">
                        <i className="fa fa-minus"></i>
                      </span> 
                      <input className="form-control input-sm" /> 
                      <span className="input-group-addon text-muted" role="button">
                        <i className="fa fa-plus"></i>
                      </span> 
                    </div>
                  </td>
                  <td>$xx.xx</td>
                  <td>
                    <i className="fa fa-trash-o text-danger fz-h4" role="button"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to='/' className='btn btn-link'>Continue Shopping</Link>  
          </div>
          <div className="col-sm-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-6 text-right text-muted">Subtotal:</div>
                  <div className="col-sm-6">$ x,xxx.xx</div>
                </div>
                <div className="row">
                  <div className="col-sm-6 text-right text-muted">Tax:</div>
                  <div className="col-sm-6">$ 0.00</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-6 text-right"><p><strong>Total:</strong></p></div>
                  <div className="col-sm-6"><p><strong>$ x,xxx.xx</strong></p></div>
                </div>
              </div>
            </div>
            <Link to="/checkout" className="btn btn-lg btn-block">Proceed to checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;