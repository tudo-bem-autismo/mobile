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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    addButton: {
        padding: 10,
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
    scroll:{
        width: 'auto'
    }

});

export default style;