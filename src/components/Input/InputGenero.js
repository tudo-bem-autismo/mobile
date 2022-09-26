<<<<<<< HEAD
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../assets/const";
import { getGendersService } from "../../services/gender";

export const InputGenero = ({ setGenderId, hasError }) => {

  // Lista com todos os gêneros
  const [genders, setGenders] = useState([
    {
      id: 0,
      gender: 'selecione um gênero',
    }
  ]);

  // Contador de qual posição está o gênero selecionado
  const [count, setCount] = useState(0);

  // Gênero selecionado atualmente
  const [currentGender, setCurrentGender] = useState(genders[0]);

  const getGenders = async () => {

    const result = await getGendersService();
    setGenders([
      ...genders,
      ...result.data
    ])

  }

  useEffect(() => {
    getGenders()
  }, []);


  const nextGender = () => {

    // Verifica se é o ultimo item da lista, se for não deixa passar para o próximo
    if (count === (genders.length - 1))
      return

    // Define qual vai ser o próximo gênero da lista
    const newCount = count + 1

    // Define qual é o próximo gênero selecionado
    const newCurrentGender = genders[newCount]

    setCurrentGender(newCurrentGender)
    setGenderId(newCurrentGender.id)
    setCount(newCount)
  }


  const previousGender = () => {

    if (count === 0)
      return

    const newCount = count - 1

    const newCurrentGender = genders[newCount]

    setCurrentGender(newCurrentGender)
    setGenderId(newCurrentGender.id)
    setCount(newCount)
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => previousGender()}>
        <FontAwesome name="caret-left" style={styles.icons} />
      </TouchableOpacity>

      <TextInput
        style={hasError ? styles.errorInput : styles.input}
        value={currentGender.gender}
        editable={false}
      />

      <TouchableOpacity style={styles.button} onPress={() => nextGender()}>
        <FontAwesome name="caret-right" style={styles.icons} />
      </TouchableOpacity>


    </View>
  );
};
=======
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



>>>>>>> 7f4f91b9690f18ce21ee56a537ca52c65fb649c2

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
<<<<<<< HEAD
  },
  input: {
    borderColor: COLORS.black,
    width: "75%",
    height: 50,
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.blue,
    padding: 10,
    fontSize: 17,
    color: COLORS.black,
  },
  errorInput: {
    width: "75%",
    height: 50,
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.red,
    padding: 10,
    fontSize: 17,
    color: COLORS.black,
  },
});
=======
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
>>>>>>> 7f4f91b9690f18ce21ee56a537ca52c65fb649c2
