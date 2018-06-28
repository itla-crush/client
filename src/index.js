import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './global/components/Header';
import Content from './global/components/Content';

// Assets
import './index.css';
import '../public/bootstrap/css/bootstrap.min.css';
import '../public/bootstrap/js/fontawesome-all.js';
import '../public/fontawesome/js/all.js';

ReactDOM.render(<Header />, document.getElementById('header-root'));
ReactDOM.render(<Content />, document.getElementById('content-root'));
ReactDOM.render(<Footer />, document.getElementById('footer-root'));
