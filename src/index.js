import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from 'Components/HelloWorld';
import './css/main.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HelloWorld/>,
  rootElement
);
