import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text} from "react-native";
import { BlurView } from 'expo-blur';
import { FONTS, COLORS } from "../../assets/const";
import { BackButton, Button } from "../Button";
import {Picker} from '@react-native-picker/picker';
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../screens/Reports/style";
import {getResponsibleDependentsService } from "../../services";
import { getGamesService } from '../../services/game';
import { Loading } from "../../screens/Loading";



const { height } = Dimensions.get('window')

export const ModalReports = ({ label, close, show, del }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
        ]).start()
    }

    const [selectedKid, setSelectedKid] = useState();

    const [selectedGame, setSelectedGame] = useState();

    const [selectedPeriod, setSelectedPeriod] = useState();

    const [kidName, setKidName] = useState([]);
    
    const getKid = async () => {
        const result = await getResponsibleDependentsService();
        setKidName(result.data)
    }

    const [games, setGames] = useState([]);

    const getGames = async () => {
        const result = await getGamesService()
        setGames(result.data)
    }
    
    useEffect(() => {
        if (show) {
            getGames();
            getKid();
            openModal();
            setIsLoading(false);
        } else {
            closeModal()
        }
    }, [show])

const gerarRelatorio = () => {
    console.log(selectedGame + '-' + selectedKid + '-' + selectedPeriod);
}

   

    
      

    return (
        <View style={style.mainContainer}>
            {
                isLoading ? (
                    <Loading/>
                ) : ( 
                <Animated.View
                    style={[style.container, {
                        opacity: state.opacity,
                        transform: [
                            { translateY: state.container }
                        ]
                    }]}
                >
                    <Animated.View
                        style={[style.modalContainer, {
                            transform: [
                                { translateY: state.modal }
                            ]
                        }]}
                    >

                        <BlurView
                            intensity={30}
                            tint='light'
                            style={style.blurContainer}
                        >
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
                                            onValueChange={(itemValue) =>
                                                setSelectedKid(itemValue)
                                            }>
                                            {
                                                kidName.map(
                                                    kid => (
                                                        <Picker.Item label={kid.name} value={kid.name} />
                                                    )     
                                                )
                                            }
                                        </Picker>
                                    </View>
                                   
                                    <Text style={style.text}>Selecione a dinâmica:</Text>

                                    <View style={styles.containerList}>
                                        <Picker
                                            style={style.picker}
                                            selectedValue={selectedGame}
                                            onValueChange={(itemValue) =>
                                                setSelectedGame(itemValue)
                                            }>
                                            {
                                                games.map(
                                                    game => (
                                                        <Picker.Item label={game.name} value={game.name} />
                                                    )     
                                                )
                                            }
                                        </Picker>
                                    </View>
                                   

                                    <Text style={style.text}>Selecione o periódo:</Text>

                                    <View style={styles.containerList}>
                                        <Picker
                                            style={style.picker}
                                            selectedValue={selectedPeriod}
                                            onValueChange={(itemValue) =>
                                                setSelectedPeriod(itemValue)
                                            }>
                                            
                                            <Picker.Item label='Hoje' value='0'/>
                                            <Picker.Item label='7 - Dias' value='7'/>
                                            <Picker.Item label='31 - Dias' value='31'/>
                                            <Picker.Item label='365 - Dias' value='365' />
                                               
                                        </Picker>
                                    </View>
                                   


                                </View>

                                <View style={style.buttonContainer}>

                                    <Button
                                        label="GERAR"
                                        backgroundColor={COLORS.white}
                                        borderRadius={25}
                                        width={100}
                                        height={45}
                                        onPress={() => gerarRelatorio()}
                                    />

                                </View>

                            </View>


                        </BlurView>

                    </Animated.View>
                </Animated.View >
                    )
                }
        </View>
    );

}


const style = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.red
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.blue

    },
    modalContainer: {
        height: '100%',
        width: '100%',
        // backgroundColor: COLORS.blue
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    applyGameModalContainer: {
        width: '80%',
        height: '70%',
        top: 70,
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#000',
        shadowRadius: 1,
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dependentsContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        // backgroundColor: COLORS.pink
    },
    dependentsList: {
        flexDirection: 'row'
    },
    gameContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        position: 'relative',
        // backgroundColor: COLORS.red
    },
    closeModalIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'stretch',
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
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
        // backgroundColor: COLORS.darkBlue

    },
    containerList : {
        flex            : 1,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
    },
    picker: {
        width: 180,
        backgroundColor: COLORS.red
    }
});
