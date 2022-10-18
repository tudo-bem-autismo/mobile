import React, {useState, useEffect} from 'react';
import {COLORS} from '../../assets/const';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ComponentGames} from '../../components/ComponentGames';
import { ButtonAlert, ButtonGames, ButtonImage, ComponentGamesTwo } from '../../components';
import { getStepGames } from '../../services';

//import styles from './style.js';

export function ScreenGames(){

    const [imageButton, setImageButton] = useState(null);
    const [imageButtonTwo, setImageButtonTwo] = useState(null);
    const [image, setImage] = useState(null);
    const [dialogo, setDialogo] = useState('');
    const [dialogoTwo, setDialogoTwo] = useState('');
    const [passo, setPasso] = useState('');
    const [passoTwo, setPassoTwo] = useState('');
    const [corButton, setCorButton] = useState('');
    const [game, setGame] = useState([])
    const [currentStep, setCurrenteStep] = useState(0)

    const getSteps = async () =>{
        const result = await getStepGames()
        setGame(result.data)
        // console.log(result.data)
        // setImageButton(result.dataTwo.imagem)
        // setImageButtonTwo(result.dataTwo.imagemDois)
        // setImage(result.data.image)
        // setDialogo(result.data.dialogo)
        // setDialogoTwo(result.dataTwo.dialogo)
        // setPasso(result.data.passo)
        // setPassoTwo(result.data.passo2)
        // setCorButton(result.data.corBotao)

    }
    useEffect(() =>{
        getSteps()
    }, [])


    return(
            
        <View style={{...styles.mainContainer, backgroundColor: game[currentStep].cor_fundo}}>
         {/* <View style={styles.mainContainer}>   */}

            <ButtonAlert/>
           
                {
                    game[currentStep].imagem_exemplo == null ? (
                        <ComponentGamesTwo
                        firstStepImage={game[currentStep].tbl_passo[0].imagem}
                        secondStepImage={game[currentStep].tbl_passo[1].imagem}
                        firstStepText={game[currentStep].dialogo}/>) : (
                        <ComponentGames
                        firstStepImage={game[currentStep]}/>)
                }
           
            
        </View>   

        // <ComponentGames/>
    )
    


    //if(situation.passo[0].imagem == null){
        // return(
        //     <View style = {styles.mainContainer}>
        //         <ComponentGames/>
    
    
        //     </View>
        // );

    //}
   
}

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

