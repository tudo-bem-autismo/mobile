import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,

    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    buttonJump: {
        alignItems: 'flex-end',
        marginRight: 20,
        top: '3%',
        zIndex: 2,
    },
    featureContainer: {
        flex: 2,
    },
    feature: {
        top: -5,
        width: '100%'

    },
    gamesContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        top: '-13%',
    },
    games: {
        width: 300,
        height: 210,
    },
    textContainer: {
        top: -8,
        textAlign: 'center',
        fontSize: 17,
        fontFamily: FONTS.text,
    },
    sequenceContainer: {
        top: 35,
    },
    buttonBack: {
        bottom: 10,
        marginLeft: 50,
    },
    buttonContinue: {
        width: 100,
        height: 38,
        marginLeft: 265,
        alignItems: 'center',
        justifyContent: 'center',
        top: -35,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        fontFamily: FONTS.title,
        shadowColor: COLORS.black,
        shadowRadius: 5,
        elevation: 5

    },



});

export default styles;