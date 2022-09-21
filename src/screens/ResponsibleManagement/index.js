import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import style from "./style.js";
import { BackButton, Button, Input, MaskedInput, PasswordInput } from "../../components";

import backgroundManagement from '../../assets/images/backgroundManagement.png';
import modalBackground from '../../assets/images/modalBackground.png';
import profile from '../../assets/images/profile.png';
import { COLORS } from "../../assets/const/colors.js";
import { Modal } from "../../components/ResponsibleManagement/Modal.js";

export function ResponsibleManagement() {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={style.mainContainer}>
            
            <ImageBackground
                source={backgroundManagement}
                resizeMode="cover"
                style={style.background}
            >


                <BackButton title="Voltar" />

                <View style={style.profileContainer}>
                    <Image
                        source={profile}
                        style={style.iconProfile}
                    />
                    <Text style={style.nameProfile}> Elisa Ribeiro </Text>
                </View>

                <View style={style.formContainer}>
                    <Input
                        title="Nome"
                        iconName="user-circle-o"
                        placeholder="seu nome completo"
                        borderColor={COLORS.blue}
                    />
                    <MaskedInput
                        title="Telefone"
                        iconName="phone"
                        placeholder="(99) 99999-9999"
                        borderColor={COLORS.purple}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true
                        }}
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
                    <Button
                        label="EXCLUIR"
                        backgroundColor={COLORS.purple}
                        borderRadius={15}
                        onPress={() => setShowModal(!showModal)}
                    />
                    <Button
                        label="SALVAR"
                        backgroundColor={COLORS.turquoise}
                        borderRadius={15}
                    />
                </View>

                {
                    showModal && (
                        <View style={style.modalContainer}>
                            {/* <Modal label="Tem certeza que quer excluir o perfil?" /> */}
                            <View style={style.modal}>
                                <ImageBackground
                                    source={modalBackground}
                                    style={style.modalBackground}
                                    resizeMode="cover"
                                >

                                    <View style={style.questionContainer}>
                                        <Text style={style.questionText}> Tem certeza que quer excluir o perfil?</Text>
                                    </View>

                                    <View style={style.buttonsContainer}>
                                        <Button
                                            label="NÃO"
                                            backgroundColor={COLORS.purple}
                                            borderRadius={15}
                                            onPress={() => setShowModal(!showModal)}
                                        />
                                        <Button
                                            label="SIM"
                                            backgroundColor={COLORS.turquoise}
                                            borderRadius={15}
                                        />
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>

                    )
                }


            </ImageBackground>
        </View>
    );
}


