import React from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import TouchID from 'react-native-touch-id'

import styles from './HomeStyles';

const errors = {
    "LAErrorAuthenticationFailed": "Authentication was not successful because the user failed to provide valid credentials.",
    "LAErrorUserCancel": "Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.",
    "LAErrorUserFallback": "Authentication was canceled because the user tapped the fallback button (Enter Password).",
    "LAErrorSystemCancel": "Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.",
    "LAErrorPasscodeNotSet": "Authentication could not start because the passcode is not set on the device.",
    "LAErrorTouchIDNotAvailable": "Authentication could not start because Touch ID is not available on the device",
    "LAErrorTouchIDNotEnrolled": "Authentication could not start because Touch ID has no enrolled fingers.",
    "RCTTouchIDUnknownError": "Could not authenticate for an unknown reason.",
    "RCTTouchIDNotSupported": "Device does not support Touch ID."
};

function authenticate() {
    return TouchID.authenticate()
        .then(success => {
            Alert.alert('Authenticated Successfully');
        })
        .catch(error => {
            Alert.alert(error.message);
        });
}

function passcodeAuth() {
    return PasscodeAuth.isSupported()
        .then(() => {
            return PasscodeAuth.authenticate()
        })
        .then(success => {
            Alert.alert('Authenticated Successfully');
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message);
        });
}


export default class Home extends React.Component {

    clickHandler() {
        TouchID.isSupported()
            .then(authenticate)
            .catch(error => {
                Alert.alert('TouchID not supported');
            });
    }

    // onPressDrawer = () => {
    //      NavActions.drawerOpen();
    // }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Vroozi
                </Text>


                <TouchableHighlight
                    style={styles.btn}
                    onPress={this.clickHandler}
                    underlayColor="#0380BE"
                    activeOpacity={1}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        Authenticate with Touch ID
                    </Text>
                </TouchableHighlight>
            </View>
        )
        // return (
        //     <View>
        //         <TouchableOpacity
        //             style={{
        //                 justifyContent: 'center',
        //                 alignSelf: 'center',
        //                 alignItems: 'center',
        //                 height: 40,
        //                 marginTop: 60,
        //                 backgroundColor: 'red',
        //                 width: '80%'
        //             }} onPress={() => this.onPressDrawer()}>
        //             <Text>Drawer</Text>
        //         </TouchableOpacity>
        //     </View>
        // )
    }
}