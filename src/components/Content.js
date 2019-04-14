import React, { Component } from 'react';

class Content extends Component{
    render(){
      console.log('Content render');
      return (
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
  }

export default Content;