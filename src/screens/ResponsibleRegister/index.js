import React from "react";
import { View, SafeAreaView, Text, ImageBackground, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";


import styles from "./style.js";
import Input from "../../components/Input.js";
import { BackButton } from "../../components/BackButton.js";
import Header from "../../components/Header.js";
import Title from "../../components/Title.js";
import background from '../../assets/images/background.png';
import google from "../../assets/icons/google.png";


export function ResponsiveRegister() {

    return (

        <SafeAreaView style={styles.mainContainer}>

            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.background}>
                <BackButton title="Voltar" />
                <Header />
                <View style={styles.formContainer}>

                    <Title title="Crie sua conta"/>

                    <View style={styles.registerContainer}>
                        <View style={styles.infoContainer}>
                            
                            <Input />

                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Telefone</Text>
                                <TextInput placeholder="(99) 99999-9999" style={styles.secondInput}></TextInput>
                                <FontAwesome name="phone" size={22} color="gray" style={styles.inputIcon} />
                            </View>
                        </View>
                        <View style={styles.slideContainer}>
                            <TouchableOpacity style={styles.selectedSlideButton} />
                            <TouchableOpacity style={styles.slideButton} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text>PRÓXIMO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginTitleContainer}>
                            <View style={styles.loginLine} />
                            <Text style={styles.loginTitleText}>ou entre com</Text>
                            <View style={styles.loginLine} />
                        </View>
                        <View style={styles.loginIconContainer}>
                            <TouchableOpacity>
                                <Image source={google} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.loginDescriptionContainer}>
                            <Text style={styles.loginQuestionText}>Você já tem uma conta?</Text>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Entrar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>

    );

}