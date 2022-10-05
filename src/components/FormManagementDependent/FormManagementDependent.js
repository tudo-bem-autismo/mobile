import { format } from "date-fns";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import {
  Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import Toast from "react-native-toast-message";

import { COLORS } from "../../assets/const";
import { Loading } from "../../screens/Loading";
import { getKidService } from "../../services/kid.js";
import { kidRegisterDataSchema } from "../../utils/validations/dependent";
import { Button } from "../Button/Button";
import { DataInput, Input, InputGenero } from "../Input";
import { InputNivelAutismo } from "../Input/InputNivelAutismo";
import { ModalDeleteData } from "../Modal/ModalDeleteData.js";
import { ModalSaveData } from "../Modal/ModalSaveData.js";

import backgroundManagement from '../../assets/images/backgroundKidManagement.png';
import { BackButton } from "../Button";
import { updateKidService } from "../../services";


export const FormManagementDependent = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSaveData, setShowModalSaveData] = useState(false);
  const [kid, setKid] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [genderId, setGenderId] = useState();
  const initialValues = kid;
  const [date, setDate] = useState(new Date());
  const [dateHasError, setDateHasError] = useState(false);
  const [genderHasError, setGenderHasError] = useState(false);
  const [autismLevelId, setAutismLevelId] = useState();
  const [autismLevelHasError, setAutismLevelHasError] = useState(false);
  const [image, setImage] = useState(null);


  const getKid = async () => {
    const result = await getKidService();
    setKid(result.data);
    //console.log(kid.photo);
    setDate(new Date(result.data.date));
    setGenderId(result.data.genderId);
    setAutismLevelId(result.data.autismLevelId);
    setImage(kid.photo)
    setIsLoading(false);
  };

  useEffect(() => {
    getKid();
  }, []);

  const handleForm = async (data) => {

    setShowModalSaveData(false)
    setDateHasError(false);
    setGenderHasError(false);
    setAutismLevelHasError(false);

    if (genderId === 0) {
      setGenderHasError(true);
      return;
    }

    if (autismLevelId === 0) {
      setAutismLevelHasError(true);
      return;
    }

    // Criando as configurações da imagem
    const filename = (image?.split("/").pop()) || '';
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    const photo = {
      name: filename,
      type,
      uri: image,
    };

    // console.log(filename)

    const newData = {
      ...data,
      date,
      genderId,
      autismLevelId,
      photo,
    };

    //console.log(kid.photo)
    const result = await updateKidService(newData)

      if (result.sucess) {
        return Toast.show({
          type: 'sucess',
          text1: 'Dados atualizados com sucesso'
        });
      }

  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <ImageBackground
          source={backgroundManagement}
          resizeMode="cover"
          style={styles.background}
        >

          <BackButton title="Voltar" navigation={navigation} />

          <Formik
            validationSchema={kidRegisterDataSchema}
            initialValues={initialValues}
            onSubmit={(values) => handleForm(values)}
          >
            {/* Mais propriedades do Formik para manipular o formulário */}
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={styles.containerInputs}>

                  <TouchableOpacity style={styles.contentImg} onPress={pickImage}>
                    {image ? (
                      <Image source={{ uri: image }} style={styles.foto} />
                    ) : (
                      <Image source={{ uri: values.photo }} style={styles.foto} />
                    )}
                  </TouchableOpacity>

                  <Text>FOTO</Text>

                  <View style={styles.input}>
                    <Input
                      title="Nome"
                      iconName="user-circle-o"
                      placeholder="seu nome completo"
                      borderColor={COLORS.blue}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      hasError={!!errors.name}
                      errorMessage={errors.name}
                    ></Input>
                  </View>

                  <DataInput
                    date={date}
                    setDate={setDate}
                    hasError={dateHasError}
                    value={format(date, "dd/MM/yyyy")}
                  />

                  <InputGenero
                    setGenderId={setGenderId}
                    selectedGenderId={kid.genderId}
                    hasError={genderHasError}
                  />

                  <InputNivelAutismo
                    setAutismLevelId={setAutismLevelId}
                    selectedAutismLevelId={kid.autismLevelId}
                    hasError={autismLevelHasError}
                  />

                  <View style={styles.buttons}>
                    <Button
                      label="EXCLUIR"
                      backgroundColor={COLORS.purple}
                      onPress={() => setShowModal(true)}
                      width={120}
                      height={45}
                      borderRadius={15}
                    ></Button>
                    <Button
                      label="EDITAR"
                      backgroundColor={COLORS.blue}
                      onPress={() => setShowModalSaveData(true)}
                      width={120}
                      height={45}
                      borderRadius={15}
                    ></Button>
                  </View>

                </View>

                {showModal && (
                  <View style={styles.modalContainer}>
                    <ModalDeleteData
                      label="Tem certeza que quer excluir o perfil?"
                      close={() => setShowModal(false)}
                      show={showModal}
                      del={() => deleteResponsible()}
                    />
                  </View>
                )}
                {showModalSaveData && (
                  <View style={styles.modalContainer}>
                    <ModalSaveData
                      label="Tem certeza que quer redefinir o perfil?"
                      close={() => setShowModalSaveData(false)}
                      show={showModalSaveData}
                      save={() => handleSubmit()}
                    />
                  </View>
                )}
              </>
            )}
          </Formik>
        </ImageBackground>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
  contentImg: {
    width: "30%",
    borderRadius: 200,
    height: "20%",
    borderWidth: 1,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.purple,
  },
  input: {
    alignItems: "center",
    width: "82%",
    height: "20.6%",
  },
  containerInputs: {
    flex: 12,
    alignSelf: 'stretch',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  buttons: {
    width: "90%",
    flex: 1,
    flexDirection: "row",
    marginBottom: "40%",
    zIndex: 1
  },
  foto: {
    width: "100%",
    borderRadius: 200,
    height: "100%",
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
  },

});
