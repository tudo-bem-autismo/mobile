import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import style from "./style.js";
import { BackButton, Input, MaskedInput, PasswordInput } from "../../components";

import backgroundManagement from '../../assets/images/backgroundManagement.png'
import profile from '../../assets/images/profile.png'
import { COLORS } from "../../assets/const/colors.js";

export function ResponsibleManagement() {

    return (
        <View style={style.mainContainer}>

            <ImageBackground
                source={backgroundManagement}
                resizeMode="cover"
                style={style.background}
            >

                <BackButton title="Voltar" />

                <View style={style.profileContainer}>
                    <Image source={profile} style={style.iconProfile} />
                    <Text style={style.nameProfile}> Elisa Ribeiro </Text>
                </View>

                <View style={style.formContainer}>
                    <Input
                        title="Nome"
                        iconName="user-circle-o"
                        placeholder="seu nome completo"
                        borderColor={COLORS.blue}
                    />
                    <Input
                        title="Telefone"
                        iconName="phone"
                        placeholder="(99) 99999-9999"
                        borderColor={COLORS.purple}
                    />
                    <Input
                        title="Email"
                        iconName="envelope"
                        placeholder="exemplo@gmail.com"
                        borderColor={COLORS.pink}
                    />
                    <PasswordInput
                        title="Senha"
                        placeholder="com no mínimo 4 caracteres"
                        borderColor={COLORS.yellow}
                    />

                </View>

                <View style={style.buttonContainer}>

                </View>


            </ImageBackground>
        </View>
    );
}


