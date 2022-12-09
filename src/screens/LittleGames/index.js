import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../assets/const';

import { ButtonAlert, ButtonGames } from '../../components';
import { ImageGames } from '../../components/ImageGames';
import { TextGames } from '../../components/TextGames';
import styles from './styles.js';

export function LittleGames() {

    return (

        <View style={styles.mainContainer}>

            <ButtonAlert />
            <ImageGames />
            <TextGames />

            <ButtonGames
                backgroundColor={COLORS.orange}
                borderRadius={30}
                width={150}
                height={60}
            />

        </View>
    );

}