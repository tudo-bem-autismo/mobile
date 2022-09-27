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
    // backgroundColor: COLORS.black,
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
  },
  formContainer: {
    flex: 24,
    alignSelf: 'stretch',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    ...shadow
  },
  registerContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: COLORS.darkBlue,
    //flexDirection: 'column'
  },
  infoContainer: {
    flex: 7,
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    //backgroundColor: COLORS.red,

  },
  loginContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;