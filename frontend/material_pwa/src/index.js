import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootloader from "./Bootloader";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bootloader />, document.getElementById('root'));
registerServiceWorker();
