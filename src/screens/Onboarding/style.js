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
    paperAirplaneContainer: {
        flex: 4,
        top: 10,
        alignItems: 'flex-start',
    },
    familyContainer: {
        flex: 2,
        top: -230,
        alignItems: 'center',
        justifyContent: 'center',

    },
    family: {
        width: 300,
        height: 300

    },
    textContainer: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: FONTS.text,
    },
    sequenceContainer: {
        top: 11,
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
    buttonJump: {
        alignItems: 'flex-end',
        marginRight: 20,
        top: '3%',
    }
});

export default styles;