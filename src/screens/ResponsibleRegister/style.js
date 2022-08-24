import { StyleSheet, StatusBar } from "react-native";

import COLORS from "../../assets/const/colors";

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    scroll: {
        paddingTop: 30,
        paddingHorizontal: 20,

        
    },
    title: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: "bold"
      },
      viewMain: {
        marginVertical: 20,
      },
      imageBackground: {
        flex: 1,
        alignItems: 'center'
      },
      imageBackgroundFriends: {
        flex: 1,
        alignItems: 'center'
      },

});

export default styles;