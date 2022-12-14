import { StatusBar, StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { COLORS, FONTS } from "../../assets/const";

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    backgroundContainer: {
        flex: 15,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    listingScheduleContainer: {
        height: 600,
        width: '95%',
        alignSelf: 'stretch',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.black,
        marginLeft: 12,
        backgroundColor: '#69C8E455',
    },
    headerContainer: {
        flex: 1,
        position: 'absolute',
        top: -100,
        left: 130,
        marginTop: 20,
        flexDirection: 'row',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 40,
        marginBottom: 10,
    },
    textBackButton: {
        fontSize: 20,
    },
    dependentContainer: {
        alignSelf: 'stretch',
    },
    listingContainer: {
        flex: 1,
        marginTop: 70,
        alignSelf: 'stretch'
    },
    selectedDayButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.blue,
        borderRadius: 10
    },
    daysContainer: {
        width: '92%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        padding: 5,
        marginLeft: 15
    },
    dayButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontFamily: FONTS.mandali,
        fontSize: 15
    },
    listingCardsContainer: {
        height: 350,
    },
    tasksContainer: {

    },
    cardsContainer: {

    },
    cardInvisible: {
        width: '92%',
        height: 10,
        marginTop: 20,
    },
    notFoundCard: {
        margin: 15,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNotFoundCard: {
        fontFamily: FONTS.text,
        fontSize: 16,
        textAlign: 'center'
    },
    imageNotFoundCard: {
        width: '50%',
        height: '50%',
    }
});


export default style;
