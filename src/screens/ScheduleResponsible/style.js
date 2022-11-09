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