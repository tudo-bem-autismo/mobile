import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { generos } from "../../services/genero";

import { FONTS, COLORS } from "../../assets/const";
import api from '../../services/api';

export const InputGenero = () => {

    const [dados, setDados] = React.useState([]);

  useEffect(() => {

    // console.log(generos());

    api.get("/genero")
    .then(
        (data)=>{
            // console.log(data.data[0])
            setDados(data.data);
        }
    )

    console.log(dados)

  }, []);

  return (
    <View style={styles.container}>

          <TouchableOpacity style={styles.avancar} onPress={()=>{}}>
            <FontAwesome name="backward" style={styles.icons} />
          </TouchableOpacity>

          <Text style={styles.text}>{dados[1].genero}</Text>

          <TouchableOpacity style={styles.avancar} onPress={()=>{}}>
            <FontAwesome name="forward" style={styles.icons} />
          </TouchableOpacity>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  avancar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  icons: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    borderColor: COLORS.black,
    borderWidth: 0.8,
    width: "70%",
    height: 30,
    textAlign: "center",
    padding: 5,
  },
});
