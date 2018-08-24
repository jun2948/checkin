import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store';

import DailyScreen from './screen/DailyScreen';
import WeeklyScreen from './screen/WeeklyScreen';

const AppNavigator = createStackNavigator(
  {
    DailyScreen: DailyScreen,
    WeeklyScreen: WeeklyScreen,
  },
  {
    initialRouteName: 'DailyScreen',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
