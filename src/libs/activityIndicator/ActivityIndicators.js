import React, { Component } from 'react';
import {
    Modal,
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './ActivityIndicatorsStyle';

const SIZES = ['small', 'normal', 'large'];

export default class ActivityIndicators extends Component {


    close() {

    }

    static propTypes = {
        visible: PropTypes.bool,
        color: PropTypes.string,
        indicatorSize: PropTypes.oneOf(SIZES),
        messageFontSize: PropTypes.number,
        message: PropTypes.string
    };

    static defaultProps = {
        visible: false,
        color: 'white',
        indicatorSize: 'large',
        messageFontSize: 24,
        message: ''
    };

    render() {
        const messageStyle = {
            color: this.props.color,
            fontSize: this.props.messageFontSize
        };
        if (typeof this.props.children !== 'undefined') {
            return (
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.props.visible}
                    supportedOrientations={['portrait', 'landscape']}
                    onOrientationChange={
                        evt => this.setState({ currentOrientation: evt.nativeEvent.orientation })
                    }>
                    <View style={[styles.container]}>
                        <View style={[styles.innerContainer]}>
                            {this.props.children}
                        </View>
                    </View>
                </Modal>
            );
        } else {
            return (
                <Modal
                    onRequestClose={() => this.close()}
                    animationType={'fade'}
                    transparent={true}
                    visible={this.props.visible}
                    supportedOrientations={['portrait', 'landscape']}
                    onOrientationChange={
                        evt => this.setState({ currentOrientation: evt.nativeEvent.orientation })
                    }>
                    <View style={[styles.container]}>
                        <View style={[styles.innerContainer]}>
                            <ActivityIndicator
                                style={[styles.indicator]}
                                size={this.props.indicatorSize}
                                color={this.props.color}
                            />
                            <Text style={[styles.message, messageStyle]}>
                                {this.props.message}
                            </Text>
                        </View>
                    </View>
                </Modal>
            );
        }
    }
}