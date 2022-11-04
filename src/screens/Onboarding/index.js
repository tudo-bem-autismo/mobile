import React, { useEffect } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import styles from "./style.js";

import backgroundOnboarding from '../../assets/images/backgroundOnboarding.png';
import family from '../../assets/images/family.gif';
import paperAirplane from '../../assets/images/paperAirplane.png';
import sequenceOne from '../../assets/images/sequenceOne.png';
import { getData } from "../../utils/storage/index.js";

export function Onboarding({ navigation }) {

    const verifyLoggedUser = async () => {
        const hasId = await getData('@id')

        if (hasId) {
           return ( navigation.navigate('TabsResponsible') )
        }

        verifyAlreadyLoggedIn()
    }

    const verifyAlreadyLoggedIn = async () => {
        const alreadyLoggedIn = await getData('@alreadyLoggedIn')

        if (alreadyLoggedIn) {
            navigation.navigate('Login')
        } 
    }

    useEffect(() => {
        verifyLoggedUser()
    }, [])

    return (


        <View style={styles.mainContainer}>

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
                        style={styles.family}
                        source={family}
                    />
                    <Text style={styles.textContainer}>
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
                    onPress={() => navigation.navigate('OnboardingGames')}>
                    <Text>CONTINUAR</Text>

                </TouchableOpacity>
            </ImageBackground>

        </View>

    );

}