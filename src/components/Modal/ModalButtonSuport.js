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


const { height } = Dimensions.get("window");

export const ModalButtonSuport = ({ label, close, show, del, updateChart, setChartIsLoading, idCrianca }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);

  const [midia1, setMidia1] = useState(null);
  const [midia2, setMidia2] = useState(null);
  const [midia3, setMidia3] = useState(null);
  const [midia4, setMidia4] = useState(null);
  const [midia5, setMidia5] = useState(null);

  const [tipoMidia1, setTipoMidia1] = useState('');
  const [tipoMidia2, setTipoMidia2] = useState('');
  const [tipoMidia3, setTipoMidia3] = useState('');
  const [tipoMidia4, setTipoMidia4] = useState('');
  const [tipoMidia5, setTipoMidia5] = useState('');



  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const tipoMidia = result.type

    if (!result.cancelled) {
      setImage1(result.uri);
      if (tipoMidia == 'video') {
        setMidia1(2)
        setTipoMidia1('video-camera')
      } else {
        setMidia1(1)
        setTipoMidia1('photo')

      }
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const tipoMidia = result.type

    if (tipoMidia == 'video') {
      setMidia2(2)
      setTipoMidia2('video-camera')
    } else {
      setMidia2(1)
      setTipoMidia2('photo')
    }

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const tipoMidia = result.type

    if (tipoMidia == 'video') {
      setMidia3(2)
      setTipoMidia3('video-camera')
    } else {
      setMidia3(1)
      setTipoMidia3('photo')
    }

    if (!result.cancelled) {
      setImage3(result.uri);
    }
  };

  const pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const tipoMidia = result.type

    if (tipoMidia == 'video') {
      setMidia4(2)
      setTipoMidia4('video-camera')
    } else {
      setMidia4(1)
      setTipoMidia4('photo')
    }

    if (!result.cancelled) {
      setImage4(result.uri);
    }
  };

  const pickImage5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const tipoMidia = result.type

    if (tipoMidia == 'video') {
      setMidia5(2)
      setTipoMidia5('video-camera')
    } else {
      setMidia5(1)
      setTipoMidia5('photo')
    }

    if (!result.cancelled) {
      setImage5(result.uri);
    }
  };

  const criarButtonSupport = async () => {


    let photo1 = null
    let photo2 = null
    let photo3 = null
    let photo4 = null
    let photo5 = null


    if (midia1) {

      if (midia1 == 1) {
        if (image1) {

        }
        const filename = image1.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        photo1 = {
          name: filename,
          type,
          uri: image1,
        };

      } else {
        const filename = image1.split("/").pop();
        const type = 'video/mp4'

        photo1 = {
          name: filename,
          type,
          uri: image1,
        };
      }

    }

    if (midia2) {
      if (midia2 == 1) {
        const filename = image2.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        photo2 = {
          name: filename,
          type,
          uri: image2,
        };
      } else {
        const filename = image2.split("/").pop();
        const type = 'video/mp4'

        photo2 = {
          name: filename,
          type,
          uri: image2,
        };
      }
    }

    if (midia3) {
      if (midia3 == 1) {
        const filename = image3.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        photo3 = {
          name: filename,
          type,
          uri: image3,
        };
      } else {
        const filename = image3.split("/").pop();
        const type = 'video/mp4'

        photo3 = {
          name: filename,
          type,
          uri: image3,
        };
      }
    }

    if (midia4) {
      if (midia4 == 1) {
        const filename = image4.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        photo4 = {
          name: filename,
          type,
          uri: image4,
        };
      } else {
        const filename = image4.split("/").pop();
        const type = 'video/mp4'

        photo4 = {
          name: filename,
          type,
          uri: image4,
        };
      }
    }

    if (midia5) {
      if (midia5 == 1) {
        const filename = image5.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        photo5 = {
          name: filename,
          type,
          uri: image5,
        };
      } else {
        const filename = image1.split("/").pop();
        const type = 'video/mp4'

        photo5 = {
          name: filename,
          type,
          uri: image5,
        };
      }
    }

    const data = {
      idCrianca,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5
    };

    if (photo1 == null && photo2 == null && photo3 == null && photo4 == null && photo5 == null) {
      return Toast.show({
        type: "error",
        text1: "Não foi selecionado nenhuma mídia",
      })
    } else {
      const result = await registerButtonSupport(data)

      if (result.success) {
        close()
        return Toast.show({
          type: "success",
          text1: "Conteúdo inserido com sucesso com sucesso",
        });

      }

    }




  }



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
            <BlurView intensity={30} tint="light" style={style.blurContainer}>
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
                  <Text style={style.text}>Selecione a mídia:</Text>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 15 }}
                    style={{ marginVertical: 50 }}
                  >

                    <TouchableOpacity style={style.contentImg} onPress={pickImage1}>
                      {image1 ?
                        (<Image source={{ uri: image1 }} style={style.foto} />) : (<Image source={file} style={style.file} />)
                      }
                      <FontAwesome name={tipoMidia1} style={style.iconMidia} />
                    </TouchableOpacity>


                    {image1 && (
                      <TouchableOpacity style={style.contentImg} onPress={pickImage2}>
                        {image2 ?
                          (<Image source={{ uri: image2 }} style={style.foto} />) : (<Image source={file} style={style.file} />)
                        }
                        <FontAwesome name={tipoMidia2} style={style.iconMidia} />
                      </TouchableOpacity>
                    )}

                    {image2 &&
                      (
                        <TouchableOpacity style={style.contentImg} onPress={pickImage3}>
                          {image3 ?
                            (<Image source={{ uri: image3 }} style={style.foto} />) : (<Image source={file} style={style.file} />)
                          }
                          <FontAwesome name={tipoMidia3} style={style.iconMidia} />
                        </TouchableOpacity>
                      )}

                    {image3 &&
                      (
                        <TouchableOpacity style={style.contentImg} onPress={pickImage4}>
                          {image4 ?
                            (<Image source={{ uri: image4 }} style={style.foto} />) : (<Image source={file} style={style.file} />)
                          }
                          <FontAwesome name={tipoMidia4} style={style.iconMidia} />
                        </TouchableOpacity>
                      )
                    }

                    {image4 &&
                      (
                        <TouchableOpacity style={style.contentImg} onPress={pickImage5}>
                          {image5 ?
                            (<Image source={{ uri: image5 }} style={style.foto} />) : (<Image source={file} style={style.file} />)
                          }
                          <FontAwesome name={tipoMidia5} style={style.iconMidia} />
                        </TouchableOpacity>
                      )
                    }

                  </ScrollView>

                  {/* </View> */}

                </View>


                <View style={style.buttonContainer}>


                  <Button
                    label="CRIAR"
                    backgroundColor={COLORS.pink}
                    borderRadius={25}
                    width={100}
                    height={45}
                    onPress={criarButtonSupport}
                  />

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
    // backgroundColor: COLORS.red
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.blue
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    // backgroundColor: COLORS.blue
  },
  blurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  applyGameModalContainer: {
    width: "80%",
    height: "70%",
    top: 70,
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
});
