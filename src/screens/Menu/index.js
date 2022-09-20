import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, VirtualizedList } from "react-native";

import style from "./style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import { BackButton } from "../../components/Button/BackButton";
import profileResponsible from "../../assets/images/profileResponsible.png";
import profileChild from "../../assets/images/profileChild.png";
import profileCompany from "../../assets/images/profileCompany.png";

export const Menu = () => {

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={backgroundMenu}
                resizeMode="cover"
                style={style.background}
            >

                <BackButton />

                <View style={style.navContainer}>
                    <View style={style.infoContainer}>
                        <View style={style.sessionContainer}>
                            <Image
                                style={style.profileIcon}
                                source={profileResponsible}
                            />
                            <Text style={style.textProfile}> Perfil Responsável</Text>
                        </View>

                        <View style={style.sessionContainer}>
                            <Image
                                style={style.profileIcon}
                                source={profileChild}
                            />
                            <Text style={style.textProfile}> Perfil Criança</Text>
                        </View>

                        <View style={style.sessionContainer}>
                            <Image
                                style={style.profileIcon}
                                source={profileCompany}
                            />
                            <Text style={style.textProfile}> Sobre nós</Text>
                        </View>
                    </View>
                    <View style={style.buttonContainer}>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.textButton}>SAIR DA CONTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

