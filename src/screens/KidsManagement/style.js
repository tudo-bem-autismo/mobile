import {StyleSheet, StatusBar} from 'react-native';
import {COLORS, FONTS} from '../../assets/const';

const styles =  StyleSheet.create({
    mainContainer:{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    


});
export default styles;