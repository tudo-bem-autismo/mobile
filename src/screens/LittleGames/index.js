import React from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';

import styles from './styles.js';
import { ButtonAlert, ButtonGames} from '../../components';
import {ImageGames} from '../../components/ImageGames';

export function LittleGames(){
    
    return(

        <View style = {styles.mainContainer}>
            <ButtonAlert/>
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