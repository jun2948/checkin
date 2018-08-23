import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { Constants } from 'expo';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

const IMAGE_PATH = `http://api.openweathermap.org/img/w/10d.png`;

class DailyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Daily',
    headerRight: (
      <Button
        title="Weekly"
        onPress={() => navigation.navigate('WeeklyScreen')}
        color="#3368FF"
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      data: [],
      weather: [],
      city: ''
    };
  }

  // id cc6fee5f7ba8809d1a0c8f042e9d91f4

  // fetch OpenWeatherMap API
  componentDidMount() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=cc6fee5f7ba8809d1a0c8f042e9d91f4&units=metric'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson,
          data: responseJson.main,
          weather: responseJson.weather[0]
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(`city: ${this.state.city}`);
    return (
      <View style={styles.container}>
        <Text style={styles.weatherCondition}>{this.state.dataSource.name}</Text>
        <Image 
          style={styles.weatherIcon}
          source={{ uri: IMAGE_PATH }}
          />
        <Text style={styles.temp}>{this.state.data.temp}゜</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7b733',
  },
  weatherCondition: {
    fontSize: 40,
    paddingTop: 10,
    color: '#fff'
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  temp: {
    fontSize: 30,
    color: '#fff'
  }
});

export default DailyScreen;