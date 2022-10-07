import { StatusBar, StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { COLORS, FONTS } from "../../assets/const";

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
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
        // backgroundColor: COLORS.black
    },
    listGames: {
        width: '100%',
        // backgroundColor: COLORS.blue
    },
    listGamesContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        // backgroundColor: COLORS.darkBlue
    },
    game: {
        width: '70%',
        height: '25%',
        margin: 10,
        ...bottomShadow,
        borderRadius: 40,
        backgroundColor: COLORS.white,
    },
    buttonGame: {
        height: 160,
        width: '100%',
        borderRadius: 40,
        ...bottomShadow,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
    },
    textGame: {
        fontSize: 20,
        fontFamily: FONTS.title,
        color: COLORS.black,
        zIndex: 2,
        margin: 20,

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