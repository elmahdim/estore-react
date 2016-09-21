import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
		<div className='jumbotron'>
			<h1>{this.props.content.title}</h1>
			<p>{this.props.content.subtitle}</p>
			<a href='' className='btn btn-default'>Fork me on GitHub</a>
		</div>
    );
  }
}

export default Hero;
