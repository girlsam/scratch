import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Components/App';
import 'materialize-css/dist/css/materialize.min.css';
import './css/main.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App/>,
  rootElement
);
