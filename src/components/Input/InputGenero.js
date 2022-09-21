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
import api from '../../services/api';

export const InputGenero = ({
  value}) => {

    const [dados, setDados] = React.useState([]);

    const [cont, setCont] = React.useState([]);

  useEffect(() => {

    setCont(0);

    // setDados(0);
    

    api.get("/genero")
    .then(
        (data)=>{
          // console.log(data.data[2])
            setDados(data.data);
            // console.log(dados[1].genero)
        }
      )

  }, []);

  const avancarOptionSexo = () => {
    
    if(cont  == (dados.length - 1)) {

      setCont(0)
      
    } else {
      console.log(cont);
      let incremento = cont + 1;
      setCont(incremento);
    }
    
    

    
  }

  const voltarOptionSexo = () => {
    if(cont > 0){
      console.log(cont);
      let decremento = cont - 1;
      setCont(decremento);
    } else {
      setCont(2)
    }
  }

  let genero = (dados[cont] ? dados[cont].genero : null)

  return (
    <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={()=>{voltarOptionSexo()}}>
            <FontAwesome name="caret-left" style={styles.icons} />
          </TouchableOpacity>

          {/* <Text style={styles.text}>{dados[cont].genero}</Text> */}
          <Text style={styles.text}
                    value={value = dados[cont]}>{genero}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{avancarOptionSexo()}}>
            <FontAwesome name="caret-right" style={styles.icons} />
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
