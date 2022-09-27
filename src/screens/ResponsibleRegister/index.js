import React, { useState } from "react";
import { View, SafeAreaView, ImageBackground, KeyboardAvoidingView, Platform, Text, TouchableOpacity, StyleSheet } from "react-native";

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
import headerImg from "../../assets/images/friends.png";
import { FONTS } from "../../assets/const/fonts.js";
import { COLORS } from "../../assets/const/colors.js";

export function ResponsiveRegister({ navigation }) {

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={background}
                resizeMode="cover"
                style={styles.background}>

                <BackButton title="Voltar" />
                <Header image={headerImg} />
                <View style={styles.formContainer}>

                    <Title title="Crie sua conta" />

                    <View style={styles.registerContainer}>
                        <FormSwiper navigation={navigation}/>
                    </View>

                    <View style={styles.loginContainer}>
                        <Login label="ou entre com" />
                        <Google />

                        <View style={style.loginDescriptionContainer}>
                            <Text style={style.loginQuestionText}>Você já tem uma conta?</Text>

                            <TouchableOpacity style={style.loginButton} onPress={() => navigation.navigate('Login')}>
                                <Text style={style.loginButtonText}>Entrar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </ImageBackground>

        </View >

    );

}

const style = StyleSheet.create({
    loginDescriptionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginQuestionText: {
        fontSize: 17,
        fontFamily: FONTS.text,
    },
    loginButton: {
        marginLeft: 5,
    },
    loginButtonText: {
        fontSize: 17,
        fontFamily: FONTS.text,
        color: COLORS.red,
    },
});