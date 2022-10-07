import { StatusBar, StyleSheet } from "react-native";

import {COLORS, FONT} from '../../assets/const';

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
        backgroundColor:COLORS.beige,
        zIndex: 2,
    },
    backButton:{
        margin:10,
        marginRight:"50%",
    }
})

export default styles;