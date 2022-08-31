import React, { useState } from "react";
import { View, SafeAreaView, ImageBackground, KeyboardAvoidingView, Platform } from "react-native";

import styles from "./style.js";
import {
    BackButton,
    Button,
    Google,
    Header,
    Input,
    Login,
    LoginDescription,
    SlideButton,
    FormSwiper,
    Title,
    Form,
} from "../../components";

import background from '../../assets/images/background.png';

export function ResponsiveRegister() {

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={background}
                resizeMode="cover"
                style={styles.background}>

                <BackButton title="Voltar" />
                <Header />
                <View style={styles.formContainer}>

                    <Title title="Crie sua conta" />

                        <View style={styles.registerContainer}>
                           <Form/>
                        </View>

                    <View style={styles.loginContainer}>
                        <Login label="ou entre com" />
                        <Google />
                        <LoginDescription
                            question="Você já tem uma conta?"
                            answer="Entrar"
                        />
                    </View>
                </View>

            </ImageBackground>

        </View >

    );

}