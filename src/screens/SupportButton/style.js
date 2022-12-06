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
    gamesContainer: {
        flex: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: COLORS.white
    },
    textSelectGame: {
        marginBottom: 50
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