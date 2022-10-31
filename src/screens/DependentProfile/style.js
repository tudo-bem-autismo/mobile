import { StatusBar, StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { COLORS, FONTS } from "../../assets/const";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 15,
        backgroundColor: COLORS.white,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundContainer: {
        flex: 2,
        margin: 20,
        alignSelf: 'stretch',
        // backgroundColor: COLORS.red
    },
    dependentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.darkBlue,
    },
    cardsContainer: {
        flex: 6,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: COLORS.blue
    },
    cardContainer: {
        width: '85%',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.green,
        borderWidth: 2,
        borderColor: COLORS.greenBold,
        borderRadius: 20,
        marginBottom: 20,
    },
    titleCard: {
        flex: 1,
        alignSelf: 'stretch',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: FONTS.mandali,
        // backgroundColor: COLORS.beige
    },
    medalsContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        // backgroundColor: COLORS.gray,
    },
    medalContainer: {
        flex: 2,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.white
    },
    imageMedal: {
        width: 60,
        height: 70,
        marginBottom: 10,
    },
    textMedal: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: FONTS.title
    },
    aboutDependentContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        // backgroundColor: COLORS.white
    },
    aboutContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.red,
    },
    titleAbout: {
        fontSize: 20,
        fontFamily: FONTS.title
    },
    infoAbout: {
        fontSize: 20,
        fontFamily: FONTS.title
    },
    scrollContainer: {
        width: '100%',
        // alignSelf: 'stretch',
        paddingLeft: 45,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: COLORS.red
    }

});

export default styles;