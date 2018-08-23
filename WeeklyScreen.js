import React from 'react';
import {
    StyleSheet,
    Text,
    View
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

class WeeklyScreen extends React.Component {
    static navigationOptions = ({
        navigation
    }) => {
        return {
            headerTitle: 'Weekly',
        }
    };

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

export default WeeklyScreen