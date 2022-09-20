import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, VirtualizedList } from "react-native";

import style from "./style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import { Close } from "../../components/Menu/Close";
import { Session } from "../../components/Menu/Session";
import { ModalLogOutAccount } from "../../components/Menu/ModalLogOutAccount";
import profileResponsible from "../../assets/images/profileResponsible.png";
import profileChild from "../../assets/images/profileChild.png";
import profileCompany from "../../assets/images/profileCompany.png";

export const Menu = () => {

    const [show, setShow] = useState(false);

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={backgroundMenu}
                resizeMode="cover"
                style={style.background}
            >

                <Close />

                <View style={style.navContainer}>
                    <View style={style.infoContainer}>

                        <Session
                            image={profileResponsible}
                            label="Perfil responsável"
                        />
                        <Session
                            image={profileChild}
                            label="Perfil criança"
                        />
                        <Session
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

                    {
                        show && (
                            <View style={style.modalContainer}>
                                <ModalLogOutAccount
                                    label="Deseja realmente sair da sua conta?"
                                    close={() => setShow(false)}
                                    show={show}

                                />
                            </View>

                        )
                    }

                </View>

            </ImageBackground>
        </View>
    );
}

