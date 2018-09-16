import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import Main from './app/screeens/home';
import Details from './app/screeens/details';
import rootReducer from './app/reducers';
import { SCREENS } from './app/constants/app';

const store = createStore(rootReducer);
const AppStack = createStackNavigator(
  {
    Main : {
      screen: Main,
      navigationOptions: {
        header: null,
      }
    },
    Details, Details,
  },
  {
    initialRouteName: SCREENS.MAIN,
  },
);

const App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
);

export default App;