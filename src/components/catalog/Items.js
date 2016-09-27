import React, { Component } from 'react';

class Items extends Component {
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
                CTA
              </div>
            </div>
          </div>
        </div>
      )
    });
    return <div className='row text-center'>{item}</div>;
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