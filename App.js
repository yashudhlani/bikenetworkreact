/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Navigation from './src/navigation';
import store from './src/store';
import { Provider } from 'react-redux';


const App: () => Node = () => {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
};

export default App;
