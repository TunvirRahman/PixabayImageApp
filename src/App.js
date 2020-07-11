import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppNavigation from './navigation/navigation';

const store = createStore(combineReducers({}));

const App = () => (
  <Provider store={store}>
      <AppNavigation />
    </Provider>
);
export default App;
