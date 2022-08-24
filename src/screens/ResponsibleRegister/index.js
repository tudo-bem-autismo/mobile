import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Text, ImageBackground } from "react-native";
import styles from "./style.js";

import background from '../../assets/images/background.png';
import ButtonBack from "../../components/buttonBack.js";
import ImgBackgroundFriends from "../../components/imageKids.js";


export function ResponsiveRegister() {

    return (

        <SafeAreaView style={styles.safe}>

            <ImageBackground 
                source={background} 
                resizeMode="cover" 
                style={styles.imageBackground}>
                          
                <ScrollView style={styles.scroll}>

                    <ButtonBack 
                        title={'Voltar'}>
                    </ButtonBack>

                    <ImgBackgroundFriends></ImgBackgroundFriends>

                </ScrollView>
            
            </ImageBackground>

        </SafeAreaView>
        
    );

}