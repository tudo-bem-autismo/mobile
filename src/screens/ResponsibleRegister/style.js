import { StyleSheet, StatusBar } from "react-native";

import { FONTS, COLORS } from "../../assets/const/index"

const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.black,
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
  },
  headerContainer: {
    flex: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end'
    // backgroundColor: COLORS.darkBlue,
  },
  formContainer: {
    flex: 24,
    alignSelf: 'stretch',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  backContainer: {
    flex: 1,
    flexDirection: 'row',
    color: COLORS.black,
    padding: 8,
    // backgroundColor: COLORS.blue,
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
  },
  backContainerText: {
    fontSize: 20,
    fontFamily: FONTS.text,
    color: COLORS.black,
  },
  headerImg: {
    width: '75%',
    height: '75%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.blue,
  },
  titleText: {
    fontSize: 30,
    fontFamily: FONTS.title
  },
  registerContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.darkBlue,
  },
  infoContainer: {
    flex: 2.5,
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: COLORS.red,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    // justifyContent: 'flex-end',
    // backgroundColor: COLORS.darkBlue,
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 55,
  },
  inputText: {
    fontSize: 20,
    fontFamily: FONTS.input,
    marginLeft: 10,
  },
  firstInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.blue,
    padding: 10,
    fontSize: 17,
  },
  secondInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.purple,
    padding: 10,
    fontSize: 17,
  },
  slideContainer: {
    flex: 0.5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: COLORS.blue,
  },
  selectedSlideButton: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.black,
    margin: 5,
    backgroundColor: COLORS.purple,
  },
  slideButton: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.black,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.black
  },
  loginContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default style;