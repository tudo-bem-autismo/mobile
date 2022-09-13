import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import style from "./style.js";
import { BackButton, Button, Input, LoginDescription, MaskedInput, PasswordInput } from "../../components";

import backgroundManagement from '../../assets/images/backgroundManagement.png';
import { COLORS } from "../../assets/const/colors.js";
import { ModalDeleteData } from "../../components/ResponsibleManagement/ModalDeleteData.js";
import { ModalSaveData } from "../../components/ResponsibleManagement/ModalSaveData.js";
import { Profile } from "../../components/ResponsibleManagement/Profile.js";
import { responsibleManagementService } from "../../services/responsible.js";
import { date } from "yup";
import api from "../../services/api.js";

export function ResponsibleManagement() {

    const [showModal, setShowModal] = useState(false);

    const [showModalSaveData, setShowModalSaveData] = useState(false);

    const [responsible, setResponsible] = useState([]);

    React.useEffect(() => {
        api.get("/responsavel/11").then((response) => {
            setResponsible(response.data);
        });
    }, [])

    return (
        <View style={style.mainContainer}>

            <ImageBackground
                source={backgroundManagement}
                resizeMode="cover"
                style={style.background}
            >

                <BackButton title="Voltar" />
                <Profile />

                <View style={style.formContainer}>
                    <Input
                        title="Nome"
                        iconName="user-circle-o"
                        placeholder={responsible.nome}
                        borderColor={COLORS.blue}
                        
                    />
                    <MaskedInput
                        title="Telefone"
                        iconName="phone"
                        placeholder={responsible.telefone}
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
                        placeholder={responsible.email}
                        borderColor={COLORS.pink}
                    />

                    <LoginDescription
                        question="Deseja redefinir a sua senha?"
                        answer="Redefinir"
                    /> 
                    
                    {/* <PasswordInput
                        title="Senha atual"
                        placeholder="com no mínimo 4 caracteres"
                        borderColor={COLORS.yellow}
                    />
                    <PasswordInput
                        title="Nova senha"
                        placeholder="com no mínimo 4 caracteres"
                        borderColor={COLORS.yellow}
                    /> */}

                </View>

                <View style={style.buttonContainer}>
                    <Button
                        label="EXCLUIR"
                        backgroundColor={COLORS.purple}
                        borderRadius={15}
                        onPress={() => setShowModal(true)}
                    />
                    <Button
                        label="SALVAR"
                        backgroundColor={COLORS.turquoise}
                        borderRadius={15}
                        onPress={() => setShowModalSaveData(true)}
                    />
                </View>

                {
                    showModal && (
                        <View style={style.modalContainer}>
                            <ModalDeleteData label="Tem certeza que quer excluir o perfil?" close={() => setShowModal(false)} show={showModal} />
                        </View>

                    )
                }


                {
                    showModalSaveData && (
                        <View style={style.modalContainer}>
                            <ModalSaveData label="Tem certeza que quer redefinir o perfil?" close={() => setShowModalSaveData(false)} show={showModalSaveData} />
                        </View>

                    )
                }

            </ImageBackground>
        </View>
    );
}


