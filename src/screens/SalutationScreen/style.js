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
        backgroundColor:COLORS.beige,
    },
    textContainer:{
        top:'-1%',
    },
    textName:{
        fontFamily:FONTS.title,
        fontSize:30,
        textAlign:'center',
    },
    textSalutation:{
        fontFamily:FONTS.title,
        fontSize:16,
        textAlign:'center',
        top:20,
        fontWeight:'100',
    },
    buttonLets:{   
        width:128,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.yellow,
        borderRadius:20,
        borderWidth:0.5,
        borderColor:COLORS.black,
        fontFamily:FONTS.title,
        shadowColor:COLORS.black,
        shadowRadius:5,
        elevation:5,
        top:'10%',
    },
    kidsContainer:{
        top:240,
    },
    kids:{
        width:400,
        height:155,
    }
   
});

export default styles;