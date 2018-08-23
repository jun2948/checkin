import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store';

import DailyScreen from './DailyScreen';
import WeeklyScreen from './WeeklyScreen';

const AppNavigator = createStackNavigator(
  {
    DailyScreen: DailyScreen,
    WeeklyScreen : WeeklyScreen,
  },
  {
    initialRouteName: 'DailyScreen',
  }
)

export default class App extends React.Component {

  state = {
    city: '',
  }

  showDetails = city => {
    this.setState(
      {city}
    )
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator screenProps={{showDetails: this.showDetails, getItem: this.state.city}}/>
      </Provider>
    );
  }
}
