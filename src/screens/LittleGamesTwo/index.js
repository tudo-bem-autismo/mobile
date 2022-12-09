import React from 'react';
import { View } from 'react-native';

import { ButtonAlert, ButtonImage } from '../../components';
import { TextGames } from '../../components/TextGames';
import styles from './styles.js';

export function LittleGamesTwo() {

    return (
        <View style={styles.mainContainer}>

            <ButtonAlert />

            <ButtonImage
                borderRadius={80}
                widht={150}
                height={149}
            />

            <TextGames />

        </View>
    );

}