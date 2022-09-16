import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text   } from "react-native";

import styles from "./style.js";
import {
    BackButton,
    Google,
    Header,
    Login,
    LoginDescription,
    Title,
    Form,
} from "../../components";

import background from '../../assets/images/background.png';
import headerImg from '../../assets/images/gg.png'

import {
    FormDependentRegister,
    FormLogin,
    

} from "../../components";
export function DependentRegister() {

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={headerImg}
                resizeMode="cover"
                style={styles.background}>
                

                <View style={aa.cont}>
                    <Text>FOTO</Text>
                    <FormDependentRegister/>
                    
                    
                </View>

            </ImageBackground>

        </View >

    );

}

const aa = StyleSheet.create({
    cont: {
      marginTop: '60%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
})