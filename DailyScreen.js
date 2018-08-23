import React from 'react';
import {StyleSheet,Text,View ,Button} from 'react-native';
// import { Constants } from 'expo';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

class DailyScreen extends React.Component {

    static navigationOptions = ( {navigation }) => ({
        headerTitle: 'Daily',
        headerRight: (
            <Button
                title="Weekly"
                onPress={() => navigation.navigate('WeeklyScreen')}
                color="#a41034"
            />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            city: '',
        };
    }

    // id cc6fee5f7ba8809d1a0c8f042e9d91f4

    // fetch OpenWeatherMap API
    componentDidMount() {
        return fetch(`https://openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b6907d289e10d714a6e88b30761fae22`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    dataSource: responseJson.weather
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        console.log(`city: ${this.state.city}`)
        return (
            <View>
                <Text>Hi</Text>
            </View>
        );
    }
} 

export default DailyScreen