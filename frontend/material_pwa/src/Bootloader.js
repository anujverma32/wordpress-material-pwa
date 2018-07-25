import React, { Component } from "react";
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import configureStore from './stores/store.js';
import App from "./containers/App";

const store = configureStore()

export default class Bootloader extends Component{
    render() {
        return (
            <div>
                <CssBaseline />
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}