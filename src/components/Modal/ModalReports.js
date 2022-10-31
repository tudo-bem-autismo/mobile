import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";
import { FONTS, COLORS } from "../../assets/const";
import { BackButton, Button } from "../Button";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../screens/Reports/style";
import { getResponsibleDependentsService } from "../../services";
import { getGamesService } from "../../services/game";
import { Loading } from "../../screens/Loading";
import { getReports } from "../../services";
import api from "../../services/api";
import { format } from "date-fns";


const { height } = Dimensions.get("window");

export const ModalReports = ({ label, close, show, del, updateChart, setChartIsLoading }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const [selectedKid, setSelectedKid] = useState();

  const [selectedGame, setSelectedGame] = useState();

  const [selectedPeriod, setSelectedPeriod] = useState();

  const [kidName, setKidName] = useState([]);

  const getKid = async () => {
    const result = await getResponsibleDependentsService();
    setKidName(result.data);
  };

  const [games, setGames] = useState([]);

  const getGames = async () => {
    const result = await getGamesService();
    setGames(result.data);
  };

  useEffect(() => {
    if (show) {
      gerarRelatorio();
      getGames();
      getKid();
      //   gerarRelatorio();
      openModal();
      setIsLoading(false);
    } else {
      closeModal();
    }
  }, [show]);

  const [error, setError] = useState([]);

  // setErrorsKid(error);

  const [dateReports, setDateReports] = useState([]);

  // setDateErrorsKid(dateReports);

  const [acerto, setAcerto] = useState([]);

  // setAcertosKid(acerto);


  //   const [result, setResult] = useState()
  const [data, setData] = useState()



  const gerarRelatorio = async () => {
    // setError([null])
    //console.log(selectedKid, selectedGame, selectedPeriod)
    //     const result = await getReports(selectedKid, selectedGame, selectedPeriod)
    //     const data = await result.data;
    //     const erros = data.map((err) => {

    //         return err.erros
    //   })

    //     // setError(null);
    //     setError(erros)

    //     console.log(error);
    // getReports(selectedKid, selectedGame, selectedPeriod).then(

    //     (result) => {
    //         const data = result.data
    //         const erros = data.map((err) => {
    //             return err.erros
    //       })

    //       setError(data)
    //       console.log(error)
    //     }
    // ).catch(
    //     (e) => {

    //         console.log(e)
    //     }
    // )

    // try{

    //     const result = api.get(`/crianca/perfil/relatorio/${selectedKid}/${selectedGame}/${selectedPeriod}}`)
    //     console.log(result)
    //     // setData(await result.data)

    // }catch(e){
    //     console.log(e)
    // }
    // api.get(`/crianca/perfil/relatorio/${selectedKid}/${selectedGame}/${selectedPeriod}}`).then(

    //     (result) => {

    //         setData(result.data)


    //     }
    // ).catch(

    //     (e)=> {

    //         console.log(e)
    //     }
    // ) 

    // console.log(data)

    setChartIsLoading(true)

    // variaveis utilizadas para filtros, são passadas "?period=" chamadas como query params
    api.get(`/crianca/perfil/relatorio/${selectedKid}/${selectedGame}/${selectedPeriod}`).then(

      (result) => {
        setData(result.data)

        //console.log(result.data)

        const relatoryDays = result.data.map(item => format(new Date(item.data), "dd/MM/yyyy"))

        const relatoryErrors = result.data.map(item => item.erros)

        const relatoryHits = result.data.map(item => item.acertos)

        updateChart({
          dates: relatoryDays,
          errors: relatoryErrors,
          hits: relatoryHits
        })

        setChartIsLoading(false)
      }


    ).catch(

      (e) => {
        console.log(e)
        setChartIsLoading(false)
      }
    )

  };



  useEffect(() => {

    if (data) {

      const err = data.map(
        (item) => {
          return item.erros
        }
      )
      setError(err)

      const d = data.map(
        (item) => {
          const dataBD = item.data.split('T')[0]
          const dataArray = dataBD.split('-')
          return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
          // const
          // console.log(item.data.split('T')[0])
          //return format((new Date(item.data.split('T')[0])), 'dd/mm/yyyy') 
        }
      )

      setDateReports(d)

      const acertos = data.map(
        (item) => {
          return item.acertos
        }
      )
      setAcerto(acertos)




    } else {
      console.log('ERRO')
    }

  }, [data])




  return (

    <View style={style.mainContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <Animated.View
          style={[
            style.container,
            {
              opacity: state.opacity,
              transform: [{ translateY: state.container }],
            },
          ]}
        >
          <Animated.View
            style={[
              style.modalContainer,
              {
                transform: [{ translateY: state.modal }],
              },
            ]}
          >
            <BlurView intensity={30} tint="light" style={style.blurContainer}>
              <View style={style.applyGameModalContainer}>
                <View style={style.closeModalIconContainer}>
                  <MaterialIcons
                    name="close"
                    size={30}
                    style={style.closeModalIcon}
                    onPress={close}
                  />
                </View>

                <View style={style.dependentsContainer}>
                  <Text style={style.text}>Selecione a criança:</Text>
                  <View style={styles.containerList}>
                    <Picker
                      style={style.picker}
                      selectedValue={selectedKid}
                      onValueChange={(itemValue) => setSelectedKid(itemValue)}
                    >
                      {kidName.map((kid) => (
                        <Picker.Item
                          label={kid.name}
                          value={kid.id}
                          key={kid.id}
                        />
                      ))}
                    </Picker>
                  </View>

                  <Text style={style.text}>Selecione a dinâmica:</Text>

                  <View style={styles.containerList}>
                    <Picker
                      style={style.picker}
                      selectedValue={selectedGame}
                      onValueChange={(itemValue) => setSelectedGame(itemValue)}
                    >
                      {games.map((game) => (
                        <Picker.Item
                          label={game.name}
                          value={game.id}
                          key={game.id}
                        />
                      ))}
                    </Picker>
                  </View>

                  <Text style={style.text}>Selecione o periódo:</Text>

                  <View style={styles.containerList}>
                    <Picker
                      style={style.picker}
                      selectedValue={selectedPeriod}
                      onValueChange={(itemValue) =>
                        setSelectedPeriod(itemValue)
                      }
                    >
                      <Picker.Item label="Hoje" value="0" />
                      <Picker.Item label="7 - Dias" value="7" />
                      <Picker.Item label="31 - Dias" value="31" />
                      <Picker.Item label="365 - Dias" value="365" />
                    </Picker>
                  </View>
                </View>

                <View style={style.buttonContainer}>
                  <Text>AAAAA: {dateReports} </Text>
                  <Button
                    label="GERAR"
                    backgroundColor={COLORS.pink}
                    borderRadius={25}
                    width={100}
                    height={45}
                    onPress={() => {
                      gerarRelatorio();
                    }}
                  />
                </View>
              </View>
            </BlurView>
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.red
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.blue
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    // backgroundColor: COLORS.blue
  },
  blurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  applyGameModalContainer: {
    width: "80%",
    height: "70%",
    top: 70,
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000",
    shadowRadius: 1,
    elevation: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dependentsContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    // backgroundColor: COLORS.pink
  },
  dependentsList: {
    flexDirection: "row",
  },
  gameContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    position: "relative",
    // backgroundColor: COLORS.red
  },
  closeModalIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingRight: 10,
    // backgroundColor: COLORS.darkBlue
  },
  closeModalIcon: {
    // flex: .5,
    // margin: 5,
    // backgroundColor: COLORS.blue
  },
  buttonContainer: {
    flex: 1.5,
    // marginBottom: 5,
    // backgroundColor: COLORS.darkBlue
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    // backgroundColor: COLORS.darkBlue
  },
  containerList: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: 180,
    //backgroundColor: COLORS.red
  },
});
