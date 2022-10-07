import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../assets/const";

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
        backgroundColor: COLORS.white
    },
    listGamesContainer: {
        alignSelf: 'stretch',
        // backgroundColor: COLORS.red
    },
    listGames: {
        // backgroundColor: COLORS.blue
    },
    game: {
        // width: '100%',
        // heighxt: '50%',
        margin: 10,
        backgroundColor: COLORS.white
    },
    buttonGame: {
        // height: 150,
        // width: '60%',
        margin: 10,
        backgroundColor: COLORS.white

    },
    imageGame: {
        // width: '100%',
        // height: '100%'
    }

});

export default styles;