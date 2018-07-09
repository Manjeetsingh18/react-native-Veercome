import React from 'react';
import {
    View,
    NetInfo,
    BackAndroid,
    Alert,
    StatusBar
} from 'react-native';
import { Router, Scene, Stack, ActionConst, Drawer, Overlay } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import { setIsConnected } from './redux/modules/network';

import {
    Splash,
    Login,
    Home,
    SideMenu
} from './containers';

export default class App extends React.Component {

    onExitApp = () => {
        Alert.alert(
            'Vroozi',
            'Are you sure you want to exit this app ?',
            [
                { text: 'Cancel', onPress: () => { } },
                { text: 'Ok', onPress: () => BackAndroid.exitApp() },
            ]
        );
        return true;
    };

    static contextTypes = {
        store: PropTypes.object
    };

    //----------------------------
    // Internet connectivity check
    //----------------------------

    async componentDidMount() {
        const { store: { dispatch } } = this.context;
        const dispatchConnected = isConnected => dispatch(setIsConnected(isConnected));

        NetInfo.isConnected.fetch().then().done(() => {
            NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
        });
    }

    //----------------------------
    // Initialise all classes here
    //----------------------------

    render() {
        return (
            <Router onExitApp={this.onExitApp}>
                <Stack key="root">
                    <Scene key="splash" component={Splash} hideNavBar={true} initial />
                    <Scene key="login" component={Login} hideNavBar={true} />
                    <Scene
                        drawer
                        overlay
                        hideNavBar
                        key="drawer"
                        contentComponent={SideMenu}
                        drawerWidth={300}>
                        <Scene overlay hideNavBar panHandlers={null}>
                            <Scene overlay key="home" component={Home} hideNavBar={true} />
                        </Scene>
                    </Scene>
                </Stack>
            </Router>
        );
    }
}