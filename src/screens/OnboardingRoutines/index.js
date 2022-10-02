import React, { useState } from "react";
import {Image, ImageBackground, Text, View, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";

import styles from "./style.js";

import backgroundOnboarding from '../../assets/images/backgroundOnboarding.png';
import featureTwo from '../../assets/images/featureTwo.png';
import routines from '../../assets/images/routines.gif';
import sequence from '../../assets/images/sequenceThree.png';

export function OnboardingRoutines({navigation}){

    return(
        <View style = {styles.mainContainer}>
            <ImageBackground
                source={backgroundOnboarding}
                resizeMode="cover"
                style = {styles.background}
            >
            <TouchableOpacity style = {styles.buttonJump} onPress={() => navigation.navigate('Login')}>
                <Text>PULAR</Text>
            </TouchableOpacity> 
            <View style = {styles.featureContainer}>
                <Image
                    style = {styles.feature}
                    source = {featureTwo}
                />
            </View>
            <View style = {styles.routinesContainer}>
                <Image
                    style = {styles.routines}
                    source={routines}
                />
                <Text style = {styles.textContainer}>
                Crie uma rotina por meio de agenda {'\n'}
                com alarmes. E muito mais!
                </Text>
                <Image
                style={styles.sequenceContainer}
                source={sequence}
                />
            </View>
            <TouchableOpacity 
                style = {styles.buttonBack}
                onPress={()=>navigation.navigate('OnboardingGames')}
            >
                <Text>
                    VOLTAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonContinue} onPress={() => navigation.navigate('Login')}>
                <Text>
                    VAMOS LÁ
                </Text>
            </TouchableOpacity>

            </ImageBackground>

        </View>
    );

}