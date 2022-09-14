import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Toast from 'react-native-toast-message';
import { Formik } from "formik";


import { BackButton, Button, Input, LoginDescription, MaskedInput, PasswordInput, Title } from "../../components";
import style from "./style.js";

import { COLORS } from "../../assets/const/colors.js";
import backgroundManagement from '../../assets/images/backgroundManagement.png';
import { ModalDeleteData } from "../../components/ResponsibleManagement/ModalDeleteData.js";
import { ModalSaveData } from "../../components/ResponsibleManagement/ModalSaveData.js";
import { Profile } from "../../components/ResponsibleManagement/Profile.js";
import { getResponsibleService, updateResponsibleService } from "../../services/responsible.js";
import { responsibleUpdateSchema } from "../../utils/validations/responsible/index.js";
import { Navigation } from "swiper";

export function ResponsiblePassword({ navigation }) {

    const [showModal, setShowModal] = useState(false);

    const [showModalSaveData, setShowModalSaveData] = useState(false);

    const handleForm = async (data) => {

        setShowModalSaveData(false)

        const result = await updateResponsibleService(data)

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Dados atualizados com sucesso',
            });
        }
    }

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    }

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={backgroundManagement}
                resizeMode="cover"
                style={style.background}
            >

                <BackButton
                    title="Voltar"
                    navigation={navigation}
                />

                <Formik
                    validationSchema={responsibleUpdateSchema}
                    initialValues={initialValues}
                    onSubmit={values => handleForm(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <>

                            <View style={style.formContainer}>

                                <View style={style.titleContainer}>
                                    <Text style={style.titleText}>REDEFINIÇÃO DE SENHA</Text>
                                </View>

                                <PasswordInput
                                    title="Senha atual"
                                    iconName="user-circle-o"
                                    placeholder=""
                                    borderColor={COLORS.blue}
                                    onChangeText={handleChange('currentPassword')}
                                    onBlur={handleBlur('currentPassword')}
                                    value={values.currentPassword}
                                    hasError={!!errors.currentPassword}
                                    errorMessage={errors.currentPassword}
                                />

                                <PasswordInput
                                    title="Nova senha"
                                    iconName="user-circle-o"
                                    placeholder=""
                                    borderColor={COLORS.purple}
                                    onChangeText={handleChange('newPassword')}
                                    onBlur={handleBlur('newPassword')}
                                    value={values.newPassword}
                                    hasError={!!errors.newPassword}
                                    errorMessage={errors.newPassword}
                                />

                                <PasswordInput
                                    title="Confirmar nova senha"
                                    iconName="user-circle-o"
                                    placeholder=""
                                    borderColor={COLORS.pink}
                                    onChangeText={handleChange('confirmNewPassword')}
                                    onBlur={handleBlur('confirmNewPassword')}
                                    value={values.confirmNewPassword}
                                    hasError={!!errors.confirmNewPassword}
                                    errorMessage={errors.confirmNewPassword}
                                />


                            </View>

                            <View style={style.buttonContainer}>
                                <Button
                                    label="CANCELAR"
                                    backgroundColor={COLORS.purple}
                                    borderRadius={15}
                                    onPress={() => navigation.goBack()}
                                />
                                <Button
                                    label="CONFIRMAR"
                                    backgroundColor={COLORS.turquoise}
                                    borderRadius={15}
                                    onPress={() => setShowModalSaveData(true)}
                                />
                            </View>


                            {
                                showModalSaveData && (
                                    <View style={style.modalContainer}>
                                        <ModalSaveData
                                            label="Tem certeza que quer redefinir a senha?"
                                            close={() => setShowModalSaveData(false)}
                                            show={showModalSaveData}
                                            save={() => handleSubmit()}
                                        />
                                    </View>

                                )
                            }
                        </>
                    )}
                </Formik>

            </ImageBackground>

        </View>
    );
}


