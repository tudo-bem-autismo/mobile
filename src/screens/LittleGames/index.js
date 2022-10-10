import React from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';

import styles from './styles.js';
import { ButtonAlert, ButtonGames} from '../../components';
import {ImageGames} from '../../components/ImageGames';
import {TextGames, TextImage} from '../../components/TextGames';

export function LittleGames(){
    
    return(

        <View style = {styles.mainContainer}>
            <ButtonAlert/>
            <ImageGames
            />
            <TextGames
            label = "O que ela está sentindo?"
            />

            <ButtonGames  
            label ="FELICIDADE"
            tittle= "RAIVA"
            backgroundColor={COLORS.orange}
            borderRadius={30}
            width={150}
            height={60}/>
          
            
            

            
        </View>
    );

}