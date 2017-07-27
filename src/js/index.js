import '../fonts/index.css';
import '../css/styles.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {App} from './app'
import React from 'react';
import ReactDom from 'react-dom';
const root = document.getElementById('app-container');

ReactDom.render(<App />, root);