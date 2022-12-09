import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View
} from "react-native";

import Toast from 'react-native-toast-message';
import { COLORS } from "../../assets/const";
import { Loading } from "../../screens/Loading";
import { deleteKidService, getKidService } from "../../services/kid.js";
import { kidRegisterDataSchema } from "../../utils/validations/dependent";
import { Button } from "../Button/Button";
import { Input, InputGenero, MaskedInput } from "../Input";
import { InputNivelAutismo } from "../Input/InputNivelAutismo";
import { ModalDeleteData } from "../Modal/ModalDeleteData.js";
import { ModalSaveData } from "../Modal/ModalSaveData.js";


import backgroundManagement from '../../assets/images/backgroundKidManagement.png';
import { updateKidService } from "../../services";
import { BackButton } from "../Button";


export const FormManagementDependent = ({ navigation, idDependent }) => {

  const defaultKidImage = 'https://firebasestorage.googleapis.com/v0/b/tudo-bem-autismo.appspot.com/o/DefaultKidImage%2Favatar%20(1).png?alt=media&token=d0a18754-bffc-4f82-af36-9d719b3e8b85'

  const [showModal, setShowModal] = useState(false);
  const [showModalSaveData, setShowModalSaveData] = useState(false);
  const [kid, setKid] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [genderId, setGenderId] = useState();
  const [genderHasError, setGenderHasError] = useState(false);
  const [autismLevelId, setAutismLevelId] = useState();
  const [autismLevelHasError, setAutismLevelHasError] = useState(false);
  const [image, setImage] = useState(null);


  const getKid = async () => {
    const result = await getKidService(idDependent);
    setKid(result.data);
    setGenderId(result.data.genderId);
    setAutismLevelId(result.data.autismLevelId);
    setImage(result.data.photo)
    setIsLoading(false);
  };

  const initialValues = kid;

  useEffect(() => {
    getKid();
  }, []);

  const handleForm = async (data) => {


    //setDateHasError(false);
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

    const newData = {
      ...data,
      genderId,
      autismLevelId,
      photo,
      idDependent
    };

    setShowModalSaveData(false)
    setIsLoading(true)

    const result = await updateKidService(newData)


    if (result.success) {
      setIsLoading(false)
      navigation.navigate('DependentListing')
      return Toast.show({
        type: 'success',
        text1: 'Dados atualizados com sucesso'
      });

    }

  };

  const deleteKid = async () => {

    setShowModal(false)
    setIsLoading(true)

    const result = await deleteKidService(idDependent)

    if (result.success) {
      setIsLoading(false)
      navigation.navigate('DependentListing')
      return Toast.show({
        type: 'success',
        text1: 'Criança deletada com sucesso',
      });
    }

  }

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
                      <Image source={{ uri: `${values.photo ? values.photo : defaultKidImage}` }} style={styles.foto} />
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

                  <View style={styles.input}>
                    <MaskedInput
                      title="Data de Nascimento"
                      iconName="calendar"
                      placeholder="00/00/0000"
                      borderColor={COLORS.blue}
                      onChangeText={handleChange('date')}
                      onBlur={handleBlur('date')}
                      value={values.date}
                      hasError={!!errors.date}
                      errorMessage={errors.date}
                      type={'datetime'}
                      options={{
                        format: 'DD/MM/YYYY'
                      }}
                    />

                  </View>

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
                      del={() => deleteKid()}
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
    borderRadius: 10,
    height: "18%",
    borderWidth: 1,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 10,
    height: "100%",
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
  },

});
