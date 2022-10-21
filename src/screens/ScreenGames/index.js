import React, {useState, useEffect} from 'react';
import {COLORS} from '../../assets/const';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ComponentGames} from '../../components/ComponentGames';
import { ButtonAlert, ButtonGames, ButtonImage, ComponentGamesTwo } from '../../components';
import { getStepGames } from '../../services';
import { Loading } from '../Loading';

//import styles from './style.js';

export function ScreenGames(){

    const [game, setGame] = useState([])
    const [currentStep, setCurrenteStep] = useState([3])
    const [isLoading, setIsLoading] = useState(true)

    const getSteps = async () =>{
        const result = await getStepGames()
        setGame(result.data)
        console.log(game[1].imagem_exemplo)

    }
    useEffect(() =>{
        getSteps()
        setIsLoading(false)
    }, [])


    return(
        <>
        {isLoading ? (
            <Loading />
            ) : (
                
               <View style={{...styles.mainContainer, backgroundColor: game[currentStep].cor_fundo}}>
                {/* <View style={styles.mainContainer}>  */}
          
                    <ButtonAlert/>
                        {
                            game[currentStep].imagem_exemplo == null ? (
                                    
                                <ComponentGamesTwo
                                firstStepImage={game[currentStep].tbl_passo[0].imagem}
                                secondStepImage={game[currentStep].tbl_passo[1].imagem}
                                firstStepText={game[currentStep].dialogo}/> ) : (
                                        
                                <ComponentGames
                                firstStepImageGames={game[currentStep].imagem_exemplo}
                                firstStepButton={game[currentStep].tbl_passo[0].texto}
                                firstStepButtonTwo={game[currentStep].tbl_passo[1].texto}
                                firstStepColor={game[currentStep].tbl_passo[0].cor}/>)
                        }  
                      
                </View>  
            )}
        </>

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
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },

});

