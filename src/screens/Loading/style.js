import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";


const style = StyleSheet.create({
    loadingContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    loadingGif: {
        width: '60%',
        height: '20%',
    },
    text: {
        fontSize: 14,
        fontFamily: FONTS.title
    }
})

export default style; 