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

export const InputNivelAutismo = () => {

    const [dados, setDados] = React.useState([]);

    const [cont, setCont] = React.useState([]);

  useEffect(() => {

    setCont(0);  

    api.get("/nivelAutismo")
    .then(
        (data)=>{    
            setDados(data.data); 
        }
      )

  }, []);

  const avancarOptionNivel = () => {
    
    if(cont  == (dados.length - 1)) {

      setCont(0)
      
    } else {
      console.log(cont);
      let incremento = cont + 1;
      setCont(incremento);
    }
    
    

    
  }

  const voltarOptionNivel = () => {
    if(cont > 0){
      console.log(cont);
      let decremento = cont - 1;
      setCont(decremento);
    } else {
      setCont(2)
    }
  }

  let nivelAutismo = (dados[cont] ? dados[cont].descricao : null)

  return (
    <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={()=>{voltarOptionNivel()}}>
            <FontAwesome name="caret-left" style={styles.icons}/>
          </TouchableOpacity>

          {/* <Text style={styles.text}>{dados[cont].genero}</Text> */}
          <Text style={styles.text}>{nivelAutismo}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{avancarOptionNivel()}}>
            <FontAwesome name="caret-right" style={styles.icons} />
          </TouchableOpacity>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
   //backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: '10%'
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
    width: '75%',
    height: 30,
    textAlign: "center",
    padding: 5,
  },
});
