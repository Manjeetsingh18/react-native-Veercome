import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 20
    },
    indicator: {
        marginBottom: 15
    },
    message: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400'
    }
});