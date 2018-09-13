import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import Main from './app/screeens/home'
import rootReducer from './app/reducers';

const store = createStore(rootReducer);
const AppStack = createStackNavigator(
  {
    Main: Main
  },
  {
    initialRouteName: 'Main',
  },
);

const App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
);

export default App;