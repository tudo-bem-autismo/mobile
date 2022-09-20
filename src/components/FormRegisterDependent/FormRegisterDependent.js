import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Formik } from "formik";
import { COLORS } from "../../assets/const";
import { Input, DataInput, InputGenero } from "../Input";
import { InputNivelAutismo } from "../Input/InputNivelAutismo";
import { Button } from "../Button/Button";
import style from "../../screens/ResponsibleRegister/style";



export const FormDependentRegister = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

      console.log(result)

      if (!result.cancelled) {
        setImage(result.uri);
      }
  }

  
  return (
    <View style={styles.container}>

      <Formik>
        
        <View style={styles.containerInputs}>
          <TouchableOpacity 
            style={styles.contentImg}
            onPress={pickImage}
            >
              {image && <Image source={{ uri: image }} style={styles.foto}/>}
            <Text>FOTO</Text>
          </TouchableOpacity>
          <View style={styles.input}>
          <Input  
            title="Nome"
            iconName="user-circle-o"
            placeholder="Julio"
            borderColor={COLORS.blue}>
            </Input>
          </View>
          <DataInput/>
          <InputGenero/>
          <InputNivelAutismo/>
          <View style={styles.buttons}>
            <Button label="CANCELAR" backgroundColor={COLORS.purple}></Button>
            <Button label="CRIAR" backgroundColor={COLORS.blue}></Button>
          </View>
          
        </View>
        
      </Formik>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: COLORS.red,
  },
  contentImg: {
    width: 150,
    borderRadius: 200,
    height: 150,
    border: 5,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: COLORS.purple,
  },
  input: {
    alignItems: 'center',
    width: '75%'
  },
  containerInputs: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: COLORS.blue,
    width: "100%",
  },
  buttons: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: '40%'
  },
  foto: {
    width: 150,
    borderRadius: 200,
    height: 150,
    border: 5,
  }
});
