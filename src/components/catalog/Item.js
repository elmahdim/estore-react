import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
          <div className="caption">
              <img src="https://placeholdit.imgix.net/~text?txtsize=30&txt=Feature Label&w=300&h=200" alt="Item" className="img-responsive" />
              <h4>Feature Label</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                  <a href="#" className="btn btn-primary btn-small">Add to cart</a>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
