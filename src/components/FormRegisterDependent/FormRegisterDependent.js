import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { COLORS } from "../../assets/const";
import { Input, DataInput, InputGenero } from "../Input";



export const FormDependentRegister = () => {
  return (
    <View style={styles.container}>

      <Formik>
        
        <View style={styles.containerInputs}>
          <TouchableOpacity 
            style={styles.contentImg}
            >
                <Text>Escolher imagem</Text>
          </TouchableOpacity>
          <Input  
            title="Nome"
            iconName="user-circle-o"
            placeholder="Julio"
            borderColor={COLORS.pink}>
            </Input>
    
          <InputGenero/>
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
    backgroundColor: COLORS.red,
  },
  contentImg: {
    width: 150,
    borderRadius: 200,
    height: 150,
    border: 5,
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.purple,
  },
  containerInputs: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    width: "70%",
  }
});
