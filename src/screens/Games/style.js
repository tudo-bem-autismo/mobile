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
    invisibleCard:{
        width: 250,
        height: 150,
    },
    imageGameContainer: {
        width: '100%',
        height: 193,
        borderRadius: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        overflow: 'hidden',
    },
    imageGame: {
        borderRadius: 40,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    }

});

export default styles;