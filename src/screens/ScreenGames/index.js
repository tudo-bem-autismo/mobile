import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ComponentGames } from '../../components/ComponentGames';
import { ButtonAlert, ButtonGames, ButtonImage, ComponentGamesTwo } from '../../components';
import { getStepGames } from '../../services';
import { Loading } from '../Loading';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export function ScreenGames() {

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

    const getSteps = () => {
        getStepGames().then(
            (result) => {
                console.log(result.data[1].cor_fundo)
                setGame(result.data)
                setCurrentGame(result.data[0])
            }
        )
        // setStep(result.data)

    }
    useEffect(() => {
        // const result = getSteps()
        // getStepGames()
        // setGame(getSteps())
        // getSteps().then(
        //     (data) => {
        //         setGame(data)
        //     }
        // )
    

        setIsLoading(false)

    }, [game])

    const nextGame = () => {
        setCurrenteStep(currentStep + 1)
        setCurrentGame(game[currentStep + 1])
    }

    useEffect(() => {
        getSteps()


    }, [])

    // function getGames(){
    //     setIsLoading(true)
    //     setTimeout(()=>{
    //         setGames(Games)
    //         setIsLoading(false)
    //     }
    //     )
    // }
    //    const getGames = async ()=> {
    //         setIsLoading(false)
    //         const result = (await axios.get()) 
    //     }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (

                <View style={{ ...styles.mainContainer, backgroundColor: currentGame.cor_fundo }}>
                    {/* <View style={styles.mainContainer}> */}

                    <ButtonAlert />

                    {
                        currentGame.imagem_exemplo == null ? (

                            <ComponentGamesTwo
                                firstStepImage={currentGame.tbl_passo[0].imagem}
                                secondStepImage={currentGame.tbl_passo[1].imagem}
                                firstStepText={currentGame.dialogo}
                                 />) : (

                            <ComponentGames
                                firstStepImageGames={currentGame.imagem_exemplo}
                                secondStepText={currentGame.dialogo}
                                firstStepButton={currentGame.tbl_passo[0].texto}
                                firstStepButtonTwo={currentGame.tbl_passo[1].texto}
                                firstStepColor={currentGame.tbl_passo[0].cor} 
                            
                                
                                />)
                    }

                    <Pressable onPress={() => nextGame()}><Text>Next</Text></Pressable>

                </View>
            )}
        </>

        // <>
        //     {game ? (
        //         <View style={{ ...styles.mainContainer, backgroundColor: game[currentStep].cor_fundo }}>
        //             {/* <View style={styles.mainContainer}> */}

        //             <ButtonAlert />

        //             {
        //                 game[currentStep].imagem_exemplo == null ? (

        //                     <ComponentGamesTwo
        //                         firstStepImage={game[currentStep].tbl_passo[0].imagem}
        //                         secondStepImage={game[currentStep].tbl_passo[1].imagem}
        //                         firstStepText={game[currentStep].dialogo} />) : (

        //                     <ComponentGames
        //                         firstStepImageGames={game[currentStep].imagem_exemplo}
        //                         secondStepText={game[currentStep].dialogo}
        //                         firstStepButton={game[currentStep].tbl_passo[0].texto}
        //                         firstStepButtonTwo={game[currentStep].tbl_passo[1].texto}
        //                         firstStepColor={game[currentStep].tbl_passo[0].cor} />)
        //             }

        //         </View>
        //     ) : (

        //         <Loading />
        //     )}
        // </>

        // <ComponentGames/>
    );


}
//if(situation.passo[0].imagem == null){
// return(
//     <View style = {styles.mainContainer}>
//         <ComponentGames/>


//     </View>
// );

//}



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

