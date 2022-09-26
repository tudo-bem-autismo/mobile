import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import { isEqual } from "date-fns";

import { COLORS } from "../../assets/const";
import { Input, DataInput, InputGenero } from "../Input";
import { InputNivelAutismo } from "../Input/InputNivelAutismo";
import { Button } from "../Button/Button";
import { kidRegisterService } from "../../services/kid.js";
import { kidRegisterDataSchema } from "../../utils/validations/dependent";

export const FormDependentRegister = () => {
  const now = new Date();

  const [date, setDate] = useState(now);

  const [dateHasError, setDateHasError] = useState(false);

  const [genderHasError, setGenderHasError] = useState(false);

  const [genderId, setGenderId] = useState(0);

  const [autismLevelId, setAutismLevelId] = useState(0);

  const [autismLevelHasError, setAutismLevelHasError] = useState(false);

  const [image, setImage] = useState(null);

  const handleForm = async (data) => {
    if (isEqual(date, now)) {
      setDateHasError(true);

      return;
    }

    if (genderId === 0) {
      setGenderHasError(true);

      return;
    }

    if (autismLevelId === 0) {
      setAutismLevelHasError(true);

      return;
    }

    setDateHasError(false);
    setGenderHasError(false);
    setAutismLevelHasError(false);

    // Criando as configurações da imagem
    const filename = image.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    const photo = {
      name: filename,
      type,
      uri: image,
    };

    const newData = {
      ...data,
      date,
      genderId,
      autismLevelId,
      photo,
    };

    const result = await kidRegisterService(newData);

    if (result.success) {
      return Toast.show({
        type: "success",
        text1: "Criança cadastrada com sucesso",
      });
    }
  };

  // Todos os campos irão iniciar com esses valores, ou seja, vazios
  const initialValues = {
    name: "",
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
                {image && <Image source={{ uri: image }} style={styles.foto} />}
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
              />

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
                ></Button>
                <Button
                  label="CRIAR"
                  backgroundColor={COLORS.blue}
                  onPress={handleSubmit}
                ></Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentImg: {
    width: 130,
    borderRadius: 200,
    height: 130,
    borderWidth: 1,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.purple,
  },
  input: {
    alignItems: "center",
    width: "75%",
    height: "20.6%",
  },
  containerInputs: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttons: {
    width: "90%",
    flex: 1,
    flexDirection: "row",
    marginBottom: "40%",
  },
  foto: {
    width: "100%",
    borderRadius: 200,
    height: "100%",
  },
});
