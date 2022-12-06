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
    listingCardsContainer: {
        height: 350,
    },
    game: {
        width: 250,
        height: 120,
        margin: 10,
        borderRadius: 40,
        backgroundColor: COLORS.white,
    },
    buttonGame: {
        height: 160,
        width: '100%',
        borderRadius: 40,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
    },
    textGame: {
        fontSize: 20,
        fontFamily: FONTS.title,
        color: COLORS.black,
        textShadowColor: COLORS.black,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1,
        zIndex: 2,
        marginTop: 10,
        marginLeft: 20,

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