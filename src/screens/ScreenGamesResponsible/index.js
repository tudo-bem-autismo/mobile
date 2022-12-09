import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ComponentGamesTwo } from '../../components';
import { ComponentGames } from '../../components/ComponentGames';
import { getStepGames } from '../../services/game';
import { Loading } from '../Loading';

export function ScreenGamesResponsible({ route, navigation }) {

    let { idGames } = route.params;

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
        getGames()
        setGameLoaded(false)
    }

    const correctStep = async () => {

        if (currentStep < (game.length - 1)) {

            setCurrenteStep(currentStep + 1)
            setCurrentGame(game[currentStep + 1])

        } else {

            await navigation.navigate('CongratulationsScreenResponsible', { idGames })

            setTimeout(() => {
                clearGame()

            }, 1000)
        }

    }

    useEffect(() => {
        getGames()
    }, [gameLoaded])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (

                game && currentGame && (

                    <View style={{ ...styles.mainContainer, backgroundColor: currentGame.cor_fundo }}>

                        <View style={styles.header} />

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
    header: {
        flex: 1,

    }

});