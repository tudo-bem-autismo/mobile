import { StatusBar, StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { COLORS, FONTS } from "../../assets/const";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    scheduleContainer: {
        flex: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: COLORS.white
    },
    backgroundContainer: {
        width: '100%',
        height: '92%',
        marginBottom: 80,
        alignSelf: 'stretch',
    },  
    dependentsContainer: {
        flex: 3,
        // backgroundColor: COLORS.red,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 20,
        paddingBottom: 40,
    },
    buttonContainer: {
        flex: 2.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 50,
        // backgroundColor: COLORS.red
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
    textSelectGame: {
    },
    listGames: {
        width: '100%',

    },
    listGamesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default styles;