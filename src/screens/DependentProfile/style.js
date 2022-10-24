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

});

export default styles;