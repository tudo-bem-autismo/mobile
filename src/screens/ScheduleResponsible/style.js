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
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 20,
        marginBottom: 40,
    },
    noDependentsContainer: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    noDependentsText: {
        marginTop: 20,
        fontSize: 15,
    },
    noDependentsButton: {
        height: 100,
        alignSelf: 'stretch',
    },
    buttonContainer: {
        flex: 2.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 50,
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