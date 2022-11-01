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

export const Menu = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const handleLogout = async () => {
        await clearData('@id')
        await clearData('@email')
        await clearData('@name')
        navigation.navigate('Login')
    }

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={backgroundMenu}
                resizeMode="cover"
                style={style.background}
            >

                <Close
                    onPress={() => navigation.navigate('TabsResponsible')}
                />

                <View style={style.navContainer}>
                    <View style={style.infoContainer}>

                        <SessionResponsible
                            image={profileResponsible}
                            label="Perfil responsável"
                            navigation={navigation}
                        />
                        <SessionChild
                            image={profileChild}
                            label="Perfil criança"
                            navigation={navigation}
                        />
                        <SessionCompany
                            image={profileCompany}
                            label="Sobre nós"
                        />
                    </View>

                    <View style={style.buttonContainer}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => setShow(true)}
                        >
                            <Text style={style.textButton}>SAIR DA CONTA</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {
                    show && (
                        <View style={style.modalContainer}>
                            <ModalLogOutAccount
                                label="Deseja realmente sair da sua conta?"
                                close={() => setShow(false)}
                                show={show}
                                handleLogout={() => handleLogout()}
                            />
                        </View>

                    )
                }

            </ImageBackground>
        </View>
    );
}

