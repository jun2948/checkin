import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
// import { Constants } from 'expo';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

const IMAGE_PATH = 'http://api.openweathermap.org/img/w/';

class WeeklyScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Weekly',
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      data: [],
      // iconId: this.state.weather[0].icon
    };
  }
  // fetch OpenWeatherMap API
  componentDidMount() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=vancouver&mode=json&appid=cc6fee5f7ba8809d1a0c8f042e9d91f4&units=metric'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.city,
          data: responseJson.list,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderItem = ({ index }) => {
    return (
      <View style={styles.weatherList}>
        <Text style={styles.days}>{this.state.data[index].dt_txt}</Text>
        <Text style={styles.temp}>
          {this.state.data[index].main.temp}
          &#8451;
        </Text>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: IMAGE_PATH + this.state.data[index].weather[0].icon + '.png',
          }}
        />
        <Text style={styles.description}>
          {this.state.data[index].weather[0].description}
        </Text>
      </View>
    );
  };

  render() {
    console.log(this.state.dataSource);
    return (
      <View style={styles.container}>
        <Text style={styles.cityName}>{this.state.dataSource.name}</Text>
        <View style={styles.listStyle}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f7b733',
  },
  cityName: {
    fontSize: 40,
    color: '#fff',
  },
  weatherList: {
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'colum',
    backgroundColor: '#fff',
  },
  days: {
    fontSize: 20,
  },
  temp: {
    fontSize: 20,
  },
  description: {
    fontSize: 20,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeeklyScreen;
