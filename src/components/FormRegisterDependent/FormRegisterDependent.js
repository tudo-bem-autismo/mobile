import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Toast  from 'react-native-toast-message';
import { Formik } from "formik";
import { COLORS } from "../../assets/const";
import { Input, Button, InputGenero} from "../../components";
//import { InputNivelAutismo } from "../Input/InputNivelAutismo";
//import { Button } from "../Button/Button"


export const FormRegisterDependent = () => {

    return(
        <View style={styles.container}>

            <View style={styles.containerInputs}>
            <TouchableOpacity 
              style={styles.contentImg}
              > 
            
            </TouchableOpacity>
            <Text>FOTO</Text>
            <View style={styles.input}>
            <Input  
              title="Nome"
              iconName="user-circle-o"
              placeholder="Julio"
              borderColor={COLORS.blue}
            >
              </Input>
              <InputGenero/>
            </View>
            <View style={styles.buttons}>
              <Button label="CANCELAR" backgroundColor={COLORS.purple}></Button>
              <Button label="CRIAR" backgroundColor={COLORS.blue}></Button>
            </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: COLORS.red,
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
      alignItems: 'center',
      width: '75%',
      height: '20.6%'
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
      width: '100%',
      borderRadius: 200,
      height: '100%',
    }
  });
