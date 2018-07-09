import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: Colors.ricePaper,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      }
});