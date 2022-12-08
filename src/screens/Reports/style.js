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
    reportsContainer: {
        flex: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: COLORS.white,

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
    picker: {
        backgroundColor: COLORS.white,
        width: 130,
        height: 100
    },
    image: {
        width: 300,
        height: 200,
        // backgroundColor: COLORS.red
        position: 'absolute',
        top: 150
    },
    noImage: {
        position: 'absolute',
        top: 300,
        backgroundColor: COLORS.red
    }


});

export default styles;