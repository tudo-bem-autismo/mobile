import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";


const style = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingGif: {
        width: '30%',
        height: '20%',
    },
    text: {
        fontSize: 14,
        fontFamily: FONTS.title
    }
})

export default style; 