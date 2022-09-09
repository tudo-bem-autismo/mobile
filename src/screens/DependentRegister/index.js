import React from "react";
import { View, ImageBackground,  } from "react-native";

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

import background from '../../assets/images/backgroundDependent.png';
import headerImg from '../../assets/images/headerDependent.png'

export function DependentRegister() {

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={background}
                resizeMode="cover"
                style={styles.background}>

                <BackButton title="Voltar" />
                <Header image={headerImg} />
                <View style={styles.formContainer}>
                </View>

            </ImageBackground>

        </View >

    );

}