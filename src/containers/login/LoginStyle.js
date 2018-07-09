import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';
export default StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: Colors.background
    },
    contentStyle: {
        flex: 0.915
    },
    logoStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '65%',
        marginTop: Metrics.screenHeight / 4
    },
    footerViewStyle: {
        flex: 0.085,
        borderTopColor: Colors.black,
        borderTopWidth: 0.4,
        width: '100%',
        justifyContent: 'flex-end'
    },
    footerLogoStyle: {
        alignSelf: 'center',
        width: '20%'
    },
    inputLeftIconStyle: {
        fontSize: Fonts.size.h5,
        color: Colors.charcoal
    },
    forgotPwdBtnStyle: {
        marginVertical: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%'
    },
    forgotPwdTxtStyle: {
        fontSize: Fonts.size.h5,
        color: Colors.black,
        padding: Metrics.baseMargin
    },
    loginBtnStyle: {
        marginVertical: Metrics.smallMargin,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'grey',
        width: '50%',
        borderRadius: 25
    },
    loginTxtStyle: {
        fontSize: Fonts.size.h5,
        color: Colors.black,
        paddingVertical: Metrics.mediumMargin
    }
});