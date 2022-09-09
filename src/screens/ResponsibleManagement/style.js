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
        // backgroundColor: COLORS.blue,
    },
    modal: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: COLORS.darkBlue,
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: COLORS.gray
    },
    questionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        // backgroundColor: COLORS.blue,
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
        // backgroundColor: COLORS.purple,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    profileContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.blue,
    },
    iconProfile: {
        width: 110,
        height: 110,
        // backgroundColor: COLORS.black,
    },
    nameProfile: {
        fontSize: 25,
        fontFamily: FONTS.title,
        marginTop: 5,
    },
    formContainer: {
        flex: 10,
        alignSelf: 'stretch',
        padding: 10,
        // backgroundColor: COLORS.darkBlue,
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        zIndex: 1,
        // backgroundColor: COLORS.gray,
    },

})

export default style;