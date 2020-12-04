import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Point from './point/point'
import store from './point/store'


ReactDOM.render(
  <Provider store = {store}>
    <Point />
  </Provider>,
  document.getElementById('root')
)
