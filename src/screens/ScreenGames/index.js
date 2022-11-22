import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ComponentGames } from '../../components/ComponentGames';
import { ButtonAlert, ButtonGames, ButtonImage, ComponentGamesTwo } from '../../components';
import { getStepGames } from '../../services/game';
import { Loading } from '../Loading';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { COLORS } from '../../assets/const';
import { CongratulationsScreen } from '../CongratulationsScreen';
import { MedalScreen } from '../MedalScreen';

export function ScreenGames({route ,navigation}) {

    let {idGames} = route.params;

    // console.log(idGames);

    // const {dados} = route.params;

    const [game, setGame] = useState([{
        "id": 0,
        "ordem": 0,
        "dialogo": "",
        "imagem_exemplo": "",
        "imagem_fundo": null,
        "cor_fundo": "",
        "id_mini_jogo": 0,
        "tbl_passo": [
            {
                "id": 0,
                "imagem": null,
                "texto": "",
                "cor": "",
                "passo_correto": false,
                "descricao": "",
                "id_situacao_escolha": 0
            },
            {
                "id": 0,
                "imagem": null,
                "texto": "",
                "cor": "",
                "passo_correto": false,
                "descricao": "",
                "id_situacao_escolha": 0
            }
        ]

    }])
    const [currentStep, setCurrenteStep] = useState(0)
    const stepTest = 0
    const [step, setStep] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hits, setHits] = useState(0)
    const [mistakes, setMistakes] = useState(0)
    const [currentGame, setCurrentGame] = useState({
        "id": 0,
        "ordem": 0,
        "dialogo": "",
        "imagem_exemplo": "",
        "imagem_fundo": null,
        "cor_fundo": "",
        "id_mini_jogo": 0,
        "tbl_passo": [
            {
                "id": 0,
                "imagem": null,
                "texto": "",
                "cor": "",
                "passo_correto": false,
                "descricao": "",
                "id_situacao_escolha": 0
            },
            {
                "id": 0,
                "imagem": null,
                "texto": "",
                "cor": "",
                "passo_correto": false,
                "descricao": "",
                "id_situacao_escolha": 0
            }
        ]

    });

    const getGames = async () =>{
        const result = await getStepGames(idGames)
        setGame(result.data)

    }

    const getSteps = () => {
        getStepGames().then(
            (result) => {
                console.log(result.data[1].cor_fundo)
                setGame(result.data)
                setCurrentGame(result.data[0])
            }
        )
    }
    useEffect(() => {
        setIsLoading(false)
        getGames()
        // console.log(game)

        // console.log(idGames)
    }, [game[0].ordem])


    useEffect(() => {
        getSteps()


    }, [])

    const correctStep = () => {
        setHits(hits + 1)
        setCurrenteStep(currentStep + 1)
        setCurrentGame(game[currentStep + 1])
        // console.log(hits)
    }

    const incorrectStep = () => {
        setMistakes(mistakes+1)
        // console.log(mistakes)
    }

    return (
        <>
            
                {isLoading ? (
                    <Loading />
                ) : (
                    
                    currentStep.toString() < game.length ? (
                        
                        <View style={{ ...styles.mainContainer, backgroundColor: currentGame.cor_fundo }}>
                            {/* <View style={styles.mainContainer}> */}

                            <ButtonAlert />

                                {
                                    currentGame.imagem_exemplo == null ? (

                                        <ComponentGamesTwo
                                            firstStepImage={currentGame.tbl_passo[0].imagem}
                                            secondStepImage={currentGame.tbl_passo[1].imagem}
                                            firstStepText={currentGame.dialogo}
                                            correctStepFunction={()=>correctStep()}
                                            incorrectStepFunction={()=> incorrectStep()}
                                            firstStepCorrect = {currentGame.tbl_passo[0].passo_correto}
                                            
                                        />) : (

                                        <ComponentGames
                                            firstStepImageGames={currentGame.imagem_exemplo}
                                            secondStepText={currentGame.dialogo}
                                            firstStepButton={currentGame.tbl_passo[0].texto}
                                            firstStepButtonTwo={currentGame.tbl_passo[1].texto}
                                            firstStepColor={currentGame.tbl_passo[0].cor}
                                            correctStepFunction={() => correctStep()}
                                            incorrectStepFunction={()=> incorrectStep()}
                                            firstStepCorrect = {currentGame.tbl_passo[0].passo_correto}
                                        />)
                                }
                        
                        </View>
                    ):(<MedalScreen
                        navigation={navigation}
                        />)
                )}
            
        </>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },

});

