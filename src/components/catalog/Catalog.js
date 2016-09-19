import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    const currentComponent = this.constructor.name.toLowerCase();
    return (
      <div className={"container component-" + currentComponent}>

        <div className="jumbotron">
          <h1>Catalog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi.</p>
          <a href="" className="btn btn-default">Fork me on GitHub</a>
        </div>


        <div className="row text-center">

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

        </div>
      </div>
    );
  }
}

export default Catalog;
