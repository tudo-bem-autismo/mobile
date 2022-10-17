import React, {useState, useEffect} from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';
import {ComponentGames} from '../../components/ComponentGames';
import { ButtonAlert } from '../../components';
import { getStepGames } from '../../services';

import styles from './style.js';

export function ScreenGames({props}){

    const [imageButton, setImageButton] = useState(null);
    const [imageButtonTwo, setImageButtonTwo] = useState(null);
    const [image, setImage] = useState(null);
    const [dialogo, setDialogo] = useState('');
    const [dialogoTwo, setDialogoTwo] = useState('');
    const [passo, setPasso] = useState('');
    const [passoTwo, setPassoTwo] = useState('');
    const [corButton, setCorButton] = useState('');

    const getSteps = async () =>{
        const result = await getStepGames()
        console.log(result)
        setImageButton(result.dataTwo.imagem)
        setImageButtonTwo(result.dataTwo.imagemDois)
        setImage(result.data.image)
        setDialogo(result.data.dialogo)
        setDialogoTwo(result.dataTwo.dialogo)
        setPasso(result.data.passo)
        setPassoTwo(result.data.passo2)
        setCorButton(result.data.corBotao)

    }
    useEffect(() =>{
        getSteps()
    }, [])


    //if(situation.passo[0].imagem == null){
        return(
            <View style = {styles.mainContainer}>
                <ComponentGames/>
    
    
            </View>
        );

    //}
   
}

