import React from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';

import styles from './styles.js';
import { ButtonAlert, ButtonGames} from '../../components';

export function LittleGames(){
    
    return(

        <View style = {styles.mainContainer}>
            <ButtonAlert/>
            <ButtonGames  
            label ="titulo"
            backgroundColor={COLORS.yellow}
            borderRadius={15}
            width={80}
            height={45}/>
          
            
            

            
        </View>
    );

}