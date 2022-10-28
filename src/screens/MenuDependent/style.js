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
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: COLORS.red
    },  
    modalContainer: {
        width: '85%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.green,
        borderRadius: 30,
        borderColor: COLORS.black,
        borderWidth: 1.5,
        borderStyle: "dashed",
        margin: 15,
        // marginBottom: -20
    },
    textProfileResponsible: {
        width: '80%',
        // backgroundColor: COLORS.pink,
        fontSize: 26,
        textAlign: 'center',
        fontFamily: FONTS.text
    },
    textQuestion: {
        width: '80%',
        // backgroundColor: COLORS.pink,
        fontSize: 19,
        textAlign: 'center',
        fontFamily: FONTS.text
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 250,
        height: 45,
        // paddingVertical: 10,
        // paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        ...bottomShadow
    },
    textButton: {
        fontSize: 19,
        textAlign: 'center',
        fontFamily: FONTS.title
    }
})

export default style; 