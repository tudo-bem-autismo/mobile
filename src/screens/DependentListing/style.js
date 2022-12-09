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
    background: {
        flex: 1,
        alignSelf: 'stretch',
    },
    selectionChildContainer: {
        flex: 2,
        marginTop: 150,
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    textSelect: {
        fontSize: 20,
        letterSpacing: 1.5,
        color: COLORS.white
    },
    selectedContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,
    },
    addButton: {

    },
    addIcon: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    textAddOption: {
        fontFamily: FONTS.title,
        textAlign: 'center',
        marginTop: 5,
    },
    scroll: {

    },
    dependentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    }

});

export default style;