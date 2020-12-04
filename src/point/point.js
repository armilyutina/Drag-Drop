import React, { Component } from 'react';
import { connect } from 'react-redux'

import { filters, add } from './action/action'



class Point extends Component {
  state = {}

  render(){

    const { task, filter } = this.props;

    return(
        <div>{[...filter].map(item => <p>{item.id}{item.task}{item.isComlited}</p>)}</div>
    );
  }
}



export default connect(
  ({filter, task}) => ({
    filter,
    task
  }), { filters, add })(Point);
