import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";


import style from "./style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import { Close } from "../../components/Menu/close.js";
import { SessionResponsible } from "../../components/Menu/SessionResponsible";
import { SessionChild } from "../../components/Menu/SessionChild";
import { SessionCompany } from "../../components/Menu/SessionCompany";
import { ModalLogOutAccount } from "../../components/Menu/ModalLogOutAccount";
import profileResponsible from "../../assets/images/profileResponsible.png";
import profileChild from "../../assets/images/profileChild.png";
import profileCompany from "../../assets/images/profileCompany.png";
import { clearData } from "../../utils/storage";
import backgroundMenuDependent from "../../assets/images/backgroundMenuDependent.png";
import { PasswordInput } from "../../components";

export const MenuDependent = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const handleLogout = async () => {
        await clearData('@id')
        navigation.navigate('Login')
    }

    return (
        <View style={style.mainContainer}>

            <ImageBackground
                source={backgroundMenuDependent}
                resizeMode="cover"
                style={style.background}
            >

                <Close
                    navigation={navigation}
                />

                <View style={style.container}>

                    <Text style={style.textProfileResponsible}>Voltar ao perfil do responsável: Jennifer</Text>

                    <View style={style.modalContainer}>

                        <Text style={style.textQuestion}>Insira a senha do responsável para trocar de conta</Text>

                        <PasswordInput/>

                        <View style={style.buttonContainer}>
                            <TouchableOpacity
                                style={style.button}
                                onPress={() => setShow(true)}
                            >
                                <Text style={style.textButton}>TROCAR DE CONTA</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </ImageBackground>
        </View>
    );
}

