import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    StatusBar
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import styles from './SplashStyle';
import { Images } from '../../themes';

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(
            () => {
                Actions.login({ type: ActionConst.RESET });
            },
            3000
        );
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundContainer}
                source={Images.launchscreen}
            />
        );
    }
}