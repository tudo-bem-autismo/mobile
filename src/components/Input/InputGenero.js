import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../assets/const";
import { getGendersService } from "../../services/gender";

export const InputGenero = ({ setGenderId, hasError, selectedGenderId }) => {

  // Lista com todos os gêneros
  const [genders, setGenders] = useState([
    {
      id: 0,
      gender: 'selecione um gênero',
    }
  ]);


  // Contador de qual posição está o gênero selecionado
  const [count, setCount] = useState(0);

  const [currentGender, setCurrentGender] = useState(genders[0]);

  const setSelectedGender = () => {

    const selectedIndex = genders.findIndex(item => item.id === selectedGenderId)

    if (selectedIndex === -1)
      return

    const selectedGender = genders[selectedIndex]

    setCurrentGender(selectedGender)
    setCount(selectedIndex)
  }

  // Gênero selecionado atualmente

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

  useEffect(() => {
    setSelectedGender()
  }, [genders])


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
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  icons: {
    color: COLORS.blue,
    fontSize: 35,

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
