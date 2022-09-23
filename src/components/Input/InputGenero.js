import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FONTS, COLORS } from "../../assets/const";

export const InputGenero = ({
    value}) => {

    return (
        <View style={styles.container}>
    
              <TouchableOpacity style={styles.button} onPress={()=>{voltarOptionSexo()}}>
                <FontAwesome name="caret-left" style={styles.icons} />
              </TouchableOpacity>
    
              {/* <Text style={styles.text}>{dados[cont].genero}</Text> */}
              <Text style={styles.text}
                        ></Text>
    
              <TouchableOpacity style={styles.button} onPress={()=>{avancarOptionSexo()}}>
                <FontAwesome name="caret-right" style={styles.icons} />
              </TouchableOpacity>
            
          
        </View>
      );


}




const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
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
    fontSize: 28,
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