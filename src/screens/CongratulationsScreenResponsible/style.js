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
        backgroundColor:COLORS.clearRed,
        zIndex: 2,
    },
    text:{
        flex:1.5,
        fontFamily:FONTS.title,
        color:COLORS.white,
        fontSize:48,
        fontWeight:'bold',
    },
    happy:{
        width:453,
        height:333,
        bottom:80,
    },
    buttonPlay:{
        width:179,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        top: -35,
        backgroundColor:COLORS.darkRead,
        borderRadius:100,
        fontFamily:FONTS.title,
        shadowColor:COLORS.black,
        shadowRadius:5,
        elevation:5,  
        marginBottom:20,  
    },
    textPlay:{
        fontFamily:FONTS.title,
        fontSize:17,
        fontWeight:'bold',
        color:COLORS.white,
    },
    buttonGoOut:{
        width:179,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        top: -35,
        backgroundColor:COLORS.white,
        borderRadius:100,
        fontFamily:FONTS.title,
        shadowColor:COLORS.black,
        shadowRadius:5,
        elevation:5,
        marginBottom:20,
    },
    textGoOut:{
        fontFamily:FONTS.title,
        fontSize:17,
        fontWeight:'bold',
        color:COLORS.darkRead,
    },
});

export default styles;