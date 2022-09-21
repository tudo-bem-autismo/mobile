import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}


const style = StyleSheet.create({
    mainContainer: {
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
    selectionChildContainer: {
        flex: 2,
        // backgroundColor: COLORS.blue
    },
    container: {
        flex: 2,
        // backgroundColor: COLORS.darkBlue
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.light,
    },
    textSelect: {
        fontSize: 20,
        letterSpacing: 1.5,
        color: COLORS.white
    },
    selectedContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        // backgroundColor: COLORS.purple
    },
    textAddOption: {
        fontFamily: FONTS.title,
        textAlign: 'center',
        marginTop: 10,
    },

});

export default style;