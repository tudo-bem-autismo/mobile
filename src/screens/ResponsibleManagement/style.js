import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },
    modalContainer: {
        position: 'absolute',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 5,
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    modal: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    questionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    questionText: {
        fontSize: 25,
        fontFamily: FONTS.title,
        textAlign: 'center',

    },
    buttonsContainer: {
        flex: 3,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: 35,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    formContainer: {
        flex: 12,
        alignSelf: 'stretch',
        padding: 10,
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        zIndex: 1,
    },
    titleText: {
        fontSize: 20,
    },
    titleContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

})

export default style;