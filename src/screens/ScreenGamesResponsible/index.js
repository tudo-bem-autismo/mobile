import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ComponentGames } from '../../components/ComponentGames';
import { ButtonAlert, ButtonGames, ButtonImage, ComponentGamesTwo } from '../../components';
import { getStepGames } from '../../services/game';
import { getReports } from '../../services';
import { Loading } from '../Loading';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { COLORS } from '../../assets/const';
import { CongratulationsScreen } from '../CongratulationsScreen';
import { MedalScreen } from '../MedalScreen';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

export function ScreenGamesResponsible({ route, navigation }) {

    let { idGames } = route.params;

    console.log(idGames, '------gameRRRR')

    const [gameLoaded, setGameLoaded] = useState(false)

    const [game, setGame] = useState([{
        "id": 0,
        "ordem": 1,
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
    const [isLoading, setIsLoading] = useState(true)
    // const [hits, setHits] = useState(0)
    // const [mistakes, setMistakes] = useState(0)
    const [currentGame, setCurrentGame] = useState({
        "id": 0,
        "ordem": 1,
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

    const getGames = async () => {
        const result = await getStepGames(idGames)
        setGame(result.data)
        setCurrentGame(result.data[0])
        setGameLoaded(true)
        setIsLoading(false)

    }

    // const sendReports = async () => {

    //     const date = new Date()
    //     const result = await getReports(hits, mistakes, date, idGames)

    //     if (result.data.medalha) {

    //         await navigation.navigate('MedalScreen', {
    //             ...result,
    //             idGames
    //         })
    //     } else {
    //     await navigation.navigate('CongratulationsScreen', {idGames})
    // }

    // // setIsLoading(true)

    // setTimeout(() => {
    //     clearGame()

    // }, 1000)
    // // setIsLoading(tur)

    // }

    const clearGame = () => {

        setGame([{
            "id": 0,
            "ordem": 1,
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
        setCurrentGame({
            "id": 0,
            "ordem": 1,
            "dialogo": "",
            "imagem_exemplo": "",
            "imagem_fundo": null,
            "cor_fundo": "#fff",
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

        })

        setCurrenteStep(0)
        setIsLoading(false)
        // setMistakes(0)
        // setHits(0)
        getGames()
        setGameLoaded(false)
    }

    const correctStep = async () => {

        if (currentStep < (game.length - 1)) {

            // setHits(hits + 1)
            setCurrenteStep(currentStep + 1)
            setCurrentGame(game[currentStep + 1])

        } else {

            // sendReports()
            await navigation.navigate('CongratulationsScreenResponsible', { idGames })
            
            setTimeout(() => {
                clearGame()

            }, 1000)
        }

        // setIsLoading(true)

        // setIsLoading(tur)
    }

// const incorrectStep = () => {
//     setMistakes(mistakes + 1)
// }

useEffect(() => {

    // if(game[0].id == 0){

    getGames()
    // }
    // setCurrentGame(game[0])
    setIsLoading(false)
}, [gameLoaded])

return (
    <>
        {isLoading ? (
            <Loading />
        ) : (

            game && currentGame && (

                <View style={{ ...styles.mainContainer, backgroundColor: currentGame.cor_fundo }}>

                    <ButtonAlert />

                    {
                        currentGame.imagem_exemplo == null ? (

                            <ComponentGamesTwo
                                firstStepImage={currentGame.tbl_passo[0].imagem}
                                secondStepImage={currentGame.tbl_passo[1].imagem}
                                firstStepText={currentGame.dialogo}
                                correctStepFunction={() => correctStep()}
                                incorrectStepFunction={() => { }}
                                firstStepCorrect={currentGame.tbl_passo[0].passo_correto}

                            />) : (

                            <ComponentGames
                                firstStepImageGames={currentGame.imagem_exemplo}
                                secondStepText={currentGame.dialogo}
                                firstStepButton={currentGame.tbl_passo[0].texto}
                                firstStepButtonTwo={currentGame.tbl_passo[1].texto}
                                firstStepColor={currentGame.tbl_passo[0].cor}
                                correctStepFunction={() => correctStep()}
                                incorrectStepFunction={() => { }}
                                firstStepCorrect={currentGame.tbl_passo[0].passo_correto}
                            />)
                    }

                </View>

            )
            // : (<Loading />)
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