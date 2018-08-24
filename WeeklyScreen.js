import React from 'react';
import {StyleSheet,Text,View, FlatList} from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class WeeklyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Weekly',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
        data: []
    };
  }
    // fetch OpenWeatherMap API
  componentDidMount() {
    return fetch('https://api.openweathermap.org/data/2.5/forecast?q=vancouver&mode=json&appid=cc6fee5f7ba8809d1a0c8f042e9d91f4&units=metric')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        dataSource: responseJson.city,
        data: responseJson.list
      });
    })
    .catch(error => {
        console.error(error);
    });
  }

  renderItem = ({index}) => {
    return (
      <View style={styles.weatherList}>
        <Text>{this.state.data[index].dt_txt}</Text>
        <Text>{this.state.data[index].main.temp}&#8451;</Text>
        <Text>{this.state.data[index].weather[0].description}</Text>
      </View>
    );
  };

  render() {
    console.log(this.state.dataSource);
    return (
      <View style={styles.container}>
        <Text style={styles.cityName}>{this.state.dataSource.name}</Text>
        <FlatList  
          data={this.state.data} 
          renderItem={this.renderItem}
        />
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
  cityName: {
    fontSize: 40,
    color: '#fff'
  },
  weatherList: {
    backgroundColor: '#fff',
   }
 });

export default WeeklyScreen