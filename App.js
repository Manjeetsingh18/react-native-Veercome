/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';
import AppRouter from './src/index';

const store = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}