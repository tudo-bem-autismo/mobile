import React, { useState } from "react";
import {Image, ImageBackground, Text, View, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";


import styles from "./style.js";

import backgroundOnboarding from '../../assets/images/backgroundOnboarding.png';
import feature from '../../assets/images/feature.png';
import games from '../../assets/images/games.gif';
import sequence from '../../assets/images/sequenceTwo.png';

export function OnboardingGames({navigation}){

    return(

        <View style={styles.mainContainer}>

            <ImageBackground
                source = {backgroundOnboarding}
                resizeMode = "cover"
                style = {styles.background}
                >

            <TouchableOpacity style = {styles.buttonJump} onPress={() => navigation.navigate('Login')}>
                <Text>PULAR</Text>
            </TouchableOpacity>   

            <View style = {styles.featureContainer}>
                <Image
                    style = {styles.feature}
                    source = {feature}
                />
            </View>
            <View style = {styles.gamesContainer}>
                <Image
                    style = {styles.games}
                    source={games}
                />
            <Text style = {styles.textContainer}>
                Mini-jogos que auxiliam na {'\n'}
                aprendizagem de tarefas do cotidiano {'\n'}
                de forma interativa e simples.
            </Text>
            <Image
                style={styles.sequenceContainer}
                source={sequence}
            />
            </View>
            <TouchableOpacity 
                style = {styles.buttonBack}
                onPress={()=>navigation.navigate('Onboarding')}>
                <Text>
                    VOLTAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.buttonContinue}
                onPress= {()=>navigation.navigate('OnboardingRoutines')}>
                <Text>
                    CONTINUAR
                </Text>
            </TouchableOpacity>
            </ImageBackground>

        </View>

      
    );
}