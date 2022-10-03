import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../assets/const";

const shadow = {
  shadowOffset: { width: 0, height: -10, },
  shadowColor: 'black',
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 20,
}


const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.blue,

  },
});

export default style;