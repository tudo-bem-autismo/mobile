import { StyleSheet, StatusBar } from "react-native";

// import { FONTS, COLORS } from "../../assets/const/index"
import  {FONTS}  from "../../assets/const/fonts";
import COLORS from "../../assets/const/colors";

const shadow = {
  shadowOffset: { width: 0, height: -10, },
  shadowColor: 'black',
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 20,
}

const bottomShadow = {
  shadowOffset: { width: 0, height: 0, },
  shadowColor: 'black',
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 5,
}

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
    // backgroundColor: COLORS.darkBlue,
  },
  infoContainer: {
    flex: 2.5,
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: COLORS.red,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 138,
    height: 48,
    backgroundColor: COLORS.blue,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    ...bottomShadow
  },
  loginContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.darkBlsue,
  },
  loginLine: {
    width: 40,
    height: 1.5,
    backgroundColor: COLORS.black,
  },
  loginTitleText: {
    fontSize: 19,
    fontFamily: FONTS.mandali,
    marginLeft: 5,
    marginRight: 5,
  },
  loginIconContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: COLORS.gray,
  },
  loginDescriptionContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.purple,
  },
  loginQuestionText: {
    fontSize: 17,
    fontFamily: FONTS.text,
  },
  loginButton: {
    marginLeft: 5,
  },
  loginButtonText: {
    fontSize: 17,
    fontFamily: FONTS.text,
    color: COLORS.red,
  },
});

export default style;