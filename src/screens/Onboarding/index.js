import React, { useState } from "react";
import {Image, ImageBackground, Text, View, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";

import styles from "./style.js";

import backgroundOnboarding from '../../assets/images/backgroundOnboarding.png';
import paperAirplane from '../../assets/images/paperAirplane.png';
import family from '../../assets/images/family.gif';
import sequenceOne from '../../assets/images/sequenceOne.png';
import { COLORS } from "../../assets/const/colors.js";

export function Onboarding({navigation}){

    return(

        
            <View style= {styles.mainContainer}>

                <ImageBackground
                    source={backgroundOnboarding}
                    resizeMode="cover"
                    style={styles.background}
                >
                <TouchableOpacity style={styles.buttonJump} onPress={() => navigation.navigate('Login')}>
                    <Text>PULAR</Text>
                </TouchableOpacity>

                <View style={styles.paperAirplaneContainer}>
                    <Image
                        source={paperAirplane}
                    />

                </View>
                <View style={styles.familyContainer}>
                    <Image
                        style = {styles.family}
                        source={family}
                    />
                    <Text style ={styles.textContainer}>
                        Tudo Bem Autismo é um aplicativo {'\n'}
                        cuja intenção é auxiliar a criança nas  {'\n'}
                        atividades do dia a dia de forma  {'\n'}
                        divertida. 
                    </Text>

                    <Image
                    style={styles.sequenceContainer}
                    source={sequenceOne}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContinue}
                    onPress= {()=>navigation.navigate('OnboardingGames')}>
                    <Text>CONTINUAR</Text>

                </TouchableOpacity>
                </ImageBackground>

            </View>
      
    );

}