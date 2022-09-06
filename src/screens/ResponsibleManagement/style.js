import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";


const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    profileContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.blue,
    },
    iconProfile: {
        width: '25.2%',
        height: '60.5%',
        // backgroundColor: COLORS.black,
    },
    nameProfile: {
        fontSize: 25,
        fontFamily: FONTS.title,
        marginTop: 5,
    },
    formContainer: {
        flex: 9,
        alignSelf: 'stretch',
        padding: 10,
        // backgroundColor: COLORS.darkBlue,
    },
    buttonContainer: {
        flex: 3,
        alignSelf: 'stretch',
        backgroundColor: COLORS.gray,
    },
})

export default style;