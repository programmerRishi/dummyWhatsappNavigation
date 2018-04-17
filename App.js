/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import Router from './src/components/Router';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {});
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Router />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
});
