import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
  Image,
  ScrollView,
  ScrollViewBase
} from "react-native";
import { BlurView } from "expo-blur";
import { FONTS, COLORS } from "../../assets/const";
import { BackButton, Button } from "../Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Loading } from "../../screens/Loading";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { showErrorToast } from "../../utils/errors";
import file from '../../assets/images/addIcon.png'
import { colors } from "react-native-swiper-flatlist/src/themes";
import { registerButtonSupport } from "../../services";
import Toast from "react-native-toast-message";
import { FontAwesome } from '@expo/vector-icons';
import { ModalDeleteData } from "./ModalDeleteData";
import { deleteMidiaButtonSupport } from "../../services";


const { height } = Dimensions.get("window");

export const ModalButtonSuportForKid = ({ label, close, show, del, updateChart, setChartIsLoading, midia, idImg }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

        
  useEffect(() => {
    if (show) {
      //gerarRelatorio();
      //   gerarRelatorio();
      openModal();
      setIsLoading(false);
      // defineMidia();
    } else {
      closeModal();
    }
  }, [show]);

  return (

    <View style={style.mainContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <Animated.View
          style={[
            style.container,
            {
              opacity: state.opacity,
              transform: [{ translateY: state.container }],
            },
          ]}
        >
          <Animated.View
            style={[
              style.modalContainer,
              {
                transform: [{ translateY: state.modal }],
              },
            ]}
          >
            <BlurView style={style.blurContainer}>
              <View style={style.applyGameModalContainer}>
                <View style={style.closeModalIconContainer}>
                  <MaterialIcons
                    name="close"
                    size={30}
                    style={style.closeModalIcon}
                    onPress={close}
                  />
                </View>

                <View style={style.dependentsContainer}>
                  <Image style={{ height: 300, width: 300 }} source={{uri: midia}} resizeMode="contain"/>
                </View>
      
              </View>
            </BlurView>
          </Animated.View>
        </Animated.View>
      )}

    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: COLORS.red
  },
  container: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: COLORS.blue
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    //backgroundColor: COLORS.blue
  },
  blurContainer: {
    position: "absolute",
    top: 100,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  applyGameModalContainer: {
    width: "85%",
    height: "80%",
    top: 0,
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000",
    shadowRadius: 1,
    elevation: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dependentsContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    // backgroundColor: COLORS.pink
  },
  dependentsList: {
    flexDirection: "row",
  },
  gameContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    position: "relative",
    // backgroundColor: COLORS.red
  },
  closeModalIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingRight: 10,
    // backgroundColor: COLORS.darkBlue
  },
  closeModalIcon: {
    // flex: .5,
    // margin: 5,
    // backgroundColor: COLORS.blue
  },
  buttonContainer: {
    flex: 1.5,
    // marginBottom: 5,
    // backgroundColor: COLORS.darkBlue
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    // backgroundColor: COLORS.darkBlue
  },
  containerList: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: 180,
    //backgroundColor: COLORS.red
  },
  contentImg: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  foto: {
    width: "100%",
    borderRadius: 200,
    height: "100%",
  },
  file: {
    width: "100%",
    height: "100%",
  },
  iconMidia: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    marginTop: 5,
  },
  modalContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 5,
  },
});
