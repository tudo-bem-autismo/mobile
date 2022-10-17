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
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
});

export default style;