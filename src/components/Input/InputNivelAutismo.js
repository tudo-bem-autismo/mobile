import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  StyleSheet, TextInput, TouchableOpacity, View
} from "react-native";
import { COLORS } from "../../assets/const";
import { getAutismLevelsService } from "../../services/autimsLevel";

export const InputNivelAutismo = ({ setAutismLevelId, hasError, selectedAutismLevelId }) => {

  // Lista com todos os gêneros
  const [autismLevels, setAutismLevels] = useState([
    {
      id: 0,
      description: 'selecione um nível',
    }
  ]);

  // Contador de qual posição está o gênero selecionado
  const [count, setCount] = useState(0);

  const [currentAutismLevel, setCurrentAutismLevel] = useState(autismLevels[0]);

  const setSelectedAutismLevel = () => {

    const selectedIndex = autismLevels.findIndex(item => item.id === selectedAutismLevelId)

    if (selectedIndex === -1)
      return

    const selectedAutismLevel = autismLevels[selectedIndex]

    setCurrentAutismLevel(selectedAutismLevel)
    setCount(selectedIndex)

  }

  // Gênero selecionado atualmente

  const getAutismLevels = async () => {

    const result = await getAutismLevelsService();
    setAutismLevels([
      ...autismLevels,
      ...result.data
    ])

  }

  useEffect(() => {
    getAutismLevels()
  }, []);

  useEffect(() => {
    setSelectedAutismLevel()
  }, [autismLevels])


  const nextAutismLevel = () => {

    // Verifica se é o ultimo item da lista, se for não deixa passar para o próximo
    if (count === (autismLevels.length - 1))
      return

    // Define qual vai ser o próximo gênero da lista
    const newCount = count + 1

    // Define qual é o próximo gênero selecionado
    const newCurrentAutismLevel = autismLevels[newCount]

    setCurrentAutismLevel(newCurrentAutismLevel)
    setAutismLevelId(newCurrentAutismLevel.id)
    setCount(newCount)
  }


  const previousAutismLevel = () => {

    if (count === 0)
      return

    const newCount = count - 1

    const newCurrentAutismLevel = autismLevels[newCount]

    setCurrentAutismLevel(newCurrentAutismLevel)
    setAutismLevelId(newCurrentAutismLevel.id)
    setCount(newCount)
  }





  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => previousAutismLevel()}>
        <FontAwesome name="caret-left" style={styles.icons} />
      </TouchableOpacity>

      <TextInput
        style={hasError ? styles.errorInput : styles.input}
        value={currentAutismLevel.description}
        editable={false}
      />

      <TouchableOpacity style={styles.button} onPress={() => nextAutismLevel()}>
        <FontAwesome name="caret-right" style={styles.icons} />
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: '10%'
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
    fontWeight: "bold",
  },
  input: {
    borderColor: COLORS.black,
    textAlign: 'center',
    width: "75%",
    height: 50,
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
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.red,
    padding: 10,
    fontSize: 17,
    color: COLORS.black,
  },
});
