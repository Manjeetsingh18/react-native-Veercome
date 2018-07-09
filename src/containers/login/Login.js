import React from 'react';
import { Container, Content, Form, Icon, Item, Input } from 'native-base';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Actions as NavActions } from 'react-native-router-flux';

import { login } from '../../redux/modules/auth';
import { Images, Metrics, Colors } from '../../themes';
import { validateEmail, Message } from '../../utilities';
import { VrIcons, ActivityIndicator, Toast, DURATION } from '../../libs';

import styles from './LoginStyle';

class Login extends React.Component {

    static propTypes = {
        network: PropTypes.bool,
        auth: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            emailTxtInp: undefined,
            passwordTxtInp: undefined,
            isLoading: false
        }
    }

    onPressLogin = () => {
        NavActions.drawer();
        if (!this.props.network) {
            this.refs.toast.show(Message.network, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.emailTxtInp) {
            this.refs.toast.show(Message.emailMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (!validateEmail(this.state.emailTxtInp)) {
            this.refs.toast.show(Message.emailInvaild, DURATION.LENGTH_SHORT);
            return;
        } else {
            if (!this.state.passwordTxtInp) {
                this.refs.toast.show(Message.passwordMissing, DURATION.LENGTH_SHORT);
                return;
            } else {
                let query = {
                    email: this.state.emailTxtInp,
                    password: this.state.passwordTxtInp
                }
                this.props.login(query);
            }
        }
    }

    render() {
        const { auth } = this.props;
        return (
            <Container>
                <ActivityIndicator
                    style={{
                        flex: 1,
                        height: Metrics.screenHeight
                    }}
                    visible={auth.isLoading}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={24}
                    message="Progress..."
                />
                <View style={styles.conatiner}>
                    <Content
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentStyle}>
                        <Image
                            source={Images.logo}
                            resizeMode={'contain'}
                            style={styles.logoStyle} />
                        <Form>
                            <Item>
                                <VrIcons
                                    name='mail'
                                    family={'Ionicons'}
                                    style={styles.inputLeftIconStyle} />
                                <Input
                                    placeholder='Email'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    returnKeyType='next'
                                    value={this.state.emailTxtInp}
                                    ref={(input) => this._username = input}
                                    onChangeText={(emailTxtInp) =>
                                        this.setState({ emailTxtInp })
                                    }
                                    onSubmitEditing={(event) => {
                                        this._password._root.focus()
                                    }}
                                />
                            </Item>
                            <Item>
                                <VrIcons
                                    name='unlock-alt'
                                    family={'FontAwesome'}
                                    style={styles.inputLeftIconStyle} />
                                <Input
                                    returnKeyType='go'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    value={this.state.passwordTxtInp}
                                    ref={(input) => this._password = input}
                                    onChangeText={(passwordTxtInp) =>
                                        this.setState({ passwordTxtInp })
                                    }
                                    onSubmitEditing={() => {
                                        this.onPressLogin()
                                    }}
                                />
                            </Item>
                        </Form>
                        <TouchableOpacity
                            style={styles.forgotPwdBtnStyle}>
                            <Text style={styles.forgotPwdTxtStyle}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginBtnStyle}
                            onPress={() => this.onPressLogin()}>
                            <Text style={styles.loginTxtStyle}>Login</Text>
                        </TouchableOpacity>

                    </Content>
                    <View style={styles.footerViewStyle}>
                        <Image
                            source={Images.footerlogo}
                            resizeMode={'contain'}
                            style={styles.footerLogoStyle} />
                    </ View>
                </View>
                <Toast
                    ref="toast"
                    style={{ backgroundColor: Colors.charcoal }}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: Colors.white }}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        network: state.network.isConnected,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    login: (payload) => {
        return dispatch(login(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);