import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App goodValue={0} neutralValue={0} badValue={0} />
  </React.StrictMode>,
  document.getElementById('root'),
);
