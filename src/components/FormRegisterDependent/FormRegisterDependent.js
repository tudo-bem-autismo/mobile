import { isEqual } from "date-fns";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Image, StyleSheet,
  TouchableOpacity, View, Text
} from "react-native";
import Toast from "react-native-toast-message";



import { COLORS } from "../../assets/const";
import file from "../../assets/icons/file.png";
import { kidRegisterService } from "../../services/kid.js";
import { getData, storeData } from "../../utils/storage";
import { kidRegisterDataSchema } from "../../utils/validations/dependent";
import { Button } from "../Button/Button";
import { DataInput, Input, InputGenero, MaskedInput } from "../Input";
import { InputNivelAutismo } from "../Input/InputNivelAutismo";

export const FormDependentRegister = ({ navigation }) => {
  //const now = new Date();

  // const [date, setDate] = useState(now);

  // const [dateHasError, setDateHasError] = useState(false);

  const [genderHasError, setGenderHasError] = useState(false);

  const [genderId, setGenderId] = useState(0);

  const [autismLevelId, setAutismLevelId] = useState(0);

  const [autismLevelHasError, setAutismLevelHasError] = useState(false);

  const [image, setImage] = useState(null);

  const handleForm = async (data) => {
    // if (isEqual(date, now)) {
    //   setDateHasError(true);

    //   return;
    // }

    if (genderId === 0) {
      setGenderHasError(true);

      return;
    }

    if (autismLevelId === 0) {
      setAutismLevelHasError(true);

      return;
    }

    // setDateHasError(false);
    setGenderHasError(false);
    setAutismLevelHasError(false);

    let photo = false

    if (image) {

      // Criando as configurações da imagem
      const filename = image.split("/").pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      photo = {
        name: filename,
        type,
        uri: image,
      };
    }

    const newData = {
      ...data,
      //date,
      genderId,
      autismLevelId,
      photo,
    };

    const result = await kidRegisterService(newData);

    if (result.success) {
      await storeData(result.data.id, '@idDependent')
      return Toast.show({
        type: "success",
        text1: "Criança cadastrada com sucesso",
      });
    }
  };

  // Todos os campos irão iniciar com esses valores, ou seja, vazios
  const initialValues = {
    name: '',
    date: ''
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
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleForm(values)}
        validationSchema={kidRegisterDataSchema}
      >
        {/* Mais propriedades do Formik para manipular o formulário */}
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View style={styles.containerInputs}>

              <TouchableOpacity style={styles.contentImg} onPress={pickImage}>
                {image ?
                  (<Image source={{ uri: image }} style={styles.foto} />) : (<Image source={file} style={styles.file} />)}
              </TouchableOpacity>

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

              {/* <DataInput
                date={date}
                setDate={setDate}
                hasError={dateHasError}
              /> */}

              <InputGenero
                setGenderId={setGenderId}
                hasError={genderHasError}
              />

              <InputNivelAutismo
                setAutismLevelId={setAutismLevelId}
                hasError={autismLevelHasError}
              />

              <View style={styles.buttons}>

                <Button
                  label="CANCELAR"
                  backgroundColor={COLORS.purple}
                  borderRadius={20}
                  width={120}
                  height={50}
                  onPress={() => navigation.navigate('DependentListing')}
                />
                <Button
                  label="CRIAR"
                  backgroundColor={COLORS.blue}
                  borderRadius={20}
                  width={120}
                  height={50}
                  onPress={handleSubmit}
                />
              </View>
            </View>

          </>
        )}
      </Formik>
    </View>
  );
};

const bottomShadow = {
  shadowOffset: { width: 0, height: 0, },
  shadowColor: 'black',
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 5,
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentImg: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    width: "82%",
    height: "20.6%",
    marginBottom: "7%"
  },
  containerInputs: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "40%",
    backgroundColor: COLORS.beige
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
  buttonCancel: {
    flex: 2,
    width: 120,
    height: 50,
    backgroundColor: COLORS.purple,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancelText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    ...bottomShadow
  },
  maskedInput: {
    maskedInput: {
      borderWidth: 2,
      borderRadius: 6,
      width: '80%',
      padding: 12,
      color: COLORS.black,
      fontSize: 20
    }
  }
});
