import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
// import App from './components/App';
import 'bootstrap/scss/bootstrap.scss';

const app = document.getElementById('app');

ReactDOM.render(<AppRouter />, app);
