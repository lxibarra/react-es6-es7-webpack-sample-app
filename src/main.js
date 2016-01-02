import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
require('./main.scss');


ReactDom.render(<App/>, document.getElementById('container'));
