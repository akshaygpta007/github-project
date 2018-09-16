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
        headerStyle: {
          // As we are using react-native-material-ui toolbar instead of react-navigation
          // we don't need this header but we need to set some background color so 
          // marking height and width to 0 wiht blue background and rendering toolbar below it.
          backgroundColor: COLORS.BLUE, 
          height: 0,
          width: 0,
        },
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