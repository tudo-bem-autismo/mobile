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
    modalContainer: {
        bottom: 0,
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // backgroundColor: COLORS.pink,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    navContainer: {
        flex: 2,
        backgroundColor: COLORS.white,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderColor: COLORS.black,
        borderWidth: 2,
        borderStyle: "dashed",
        margin: 15,
        marginBottom: -20
    },
    infoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.darkBlue,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.purple,
    },
    button: {
        width: 170,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        ...bottomShadow
    },
    textButton: {
        color: COLORS.pinkBold,
    }
})

export default style; 