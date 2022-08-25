import React from "react";
import { View, SafeAreaView, Text, ImageBackground, TouchableOpacity, Image, TextInput } from "react-native";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";


import styles from "./style.js";
import background from '../../assets/images/background.png';
// import ButtonBack from "../../components/buttonBack.js";
import headerImg from "../../assets/images/friends.png";
import { COLORS } from "../../assets/const/colors.js";


export function ResponsiveRegister() {

    return (

        <SafeAreaView style={styles.mainContainer}>

            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.background}>
                <View style={styles.backContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <MaterialIcons name="arrow-back-ios" size={27} color="black" />
                        <Text style={styles.backContainerText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                    <Image source={headerImg} style={styles.headerImg} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Crie sua conta</Text>
                    </View>
                    <View style={styles.registerContainer}>
                        <View style={styles.infoContainer}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Nome</Text>
                                <TextInput placeholder="seu nome completo" style={styles.firstInput}></TextInput>
                                <FontAwesome5 name="user-alt" size={20} color="gray" style={styles.inputIcon} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Telefone</Text>
                                <TextInput placeholder="(99) 99999-9999" style={styles.secondInput}></TextInput>
                                <FontAwesome name="phone" size={22} color="gray" style={styles.inputIcon} />
                            </View>
                        </View>
                        <View style={styles.slideContainer}>
                            <TouchableOpacity style={styles.selectedSlideButton}/>
                            <TouchableOpacity style={styles.slideButton}/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                <Text>PRÓXIMO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <View>
                            <View />
                            <Text>ou entre com</Text>
                            <View />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Você já tem uma conta?</Text>
                            <Text>Entrar</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>

    );

}