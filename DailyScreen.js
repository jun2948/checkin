import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {
    Constants
} from 'expo';
import {
    createStore
} from 'redux';
import {
    Provider
} from 'react-redux';

class DailyScreen extends React.Component {
    static navigationOptions = ({
        navigation
    }) => ({
        headerTitle: 'Daily',
        headerRight: ( <
            Button title = "Weekly"
            onPress = {
                () => navigation.navigate('WeeklyScreen')
            }
            color = "#a41034" /
            >
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    render() {
        return ( <
            View >
            <
            Text > Hi < /Text> <
            /View>
        );
    }
}

export default DailyScreen