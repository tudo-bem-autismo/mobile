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
    },
    dependentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardsContainer: {
        flex: 6,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardContainer: {
        width: '85%',
        height: 250,
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
    },
    medalsContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    medalContainer: {
        flex: 2,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    aboutContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleAbout: {
        fontSize: 22,
        fontFamily: FONTS.title,
    },
    infoAbout: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontFamily: FONTS.title
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    titleButton: {
        fontSize: 20,
        fontFamily: FONTS.title,
        marginLeft: 10,
    },
    scrollContainer: {
        width: '100%',
        paddingLeft: 45,
    },
    card: {
        width: '85%',
        height: 120,
    }

});

export default styles;