import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';
import {
  Constants
} from 'expo';
import {
  createStore
} from 'redux';
import {
  Provider
} from 'react-redux';

const AppNavigator = createStackNavigator({
  Today: WeatherToday,
  Weekly: WeatherWeekly
}, {
  initialRouteName: 'Weekly',
})

export default class App extends React.Component {

  render() {
    return ( <
      AppNavigator / >
    );
  }
}