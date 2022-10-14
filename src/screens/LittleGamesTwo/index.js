import React from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';

import styles from './styles.js';
import { ButtonAlert, ButtonImage } from '../../components';
import kidLove from '../../assets/images/love.png';
import { TextGames } from '../../components/TextGames';

export function LittleGamesTwo(){
    
    return(
        <View style = {styles.mainContainer}>
            <ButtonAlert/>
            <ButtonImage
                borderRadius={80}
                widht={150}
                height={149}
                
            />
            <TextGames
            />

        </View>
    );

}