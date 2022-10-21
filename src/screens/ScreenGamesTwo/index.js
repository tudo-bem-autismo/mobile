import React from 'react';
import {COLORS} from '../../assets/const';
import {View, Text} from 'react-native';
import { ButtonAlert } from '../../components';
import { ComponentGamesTwo } from '../../components/ComponentGamesTwo';
import styles from './style';

export function ScreenGamesTwo(){

    return(
        <View style = {styles.mainContainer}>
            <ButtonAlert/>
            <ComponentGamesTwo/>
        </View>
    );
}