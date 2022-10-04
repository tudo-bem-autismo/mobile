import React from 'react';
import { ImageBackground, View } from 'react-native';
import KidsBackground from '../../assets/images/backgroundKidsManagement.png';
import { BackButton } from '../../components/Button';
import { FormRegisterDependent } from '../../components/FormRegisterDependent';
import styles from './style';

export function KidsManagement() {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={KidsBackground}
                style={styles.background}
                resizeMode='cover'
            >
                <BackButton title="Voltar" />
                <FormRegisterDependent />

            </ImageBackground>

        </View>
    )
}