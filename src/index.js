import React from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/create";
import App from './App.js'


const component = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

render( 
  <Provider store={store}>
    {component}
  </Provider>, 
  document.getElementById('root')
);
