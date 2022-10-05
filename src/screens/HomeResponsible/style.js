import { StatusBar, StyleSheet } from "react-native";

import {COLORS, FONTS} from '../../assets/const';

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },
    footer:{
        width: '100%',
        height: '12%',
        backgroundColor:COLORS.pink,
        alignContent:'stretch',
        top:'44%',
        borderWidth:2,
        borderColor:COLORS.black,
        alignItems:'center',
    },
    games:{
        width:90,
        height:86,
        backgroundColor:COLORS.white,
        borderRadius:50,
        bottom:40,
        borderStyle:"dashed",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },
    geometricShapes:{
        alignItems:'center',
    }
});

export default styles;