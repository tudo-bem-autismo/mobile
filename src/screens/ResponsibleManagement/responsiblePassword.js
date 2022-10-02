import { Formik } from "formik";
import { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Toast from 'react-native-toast-message';


import { BackButton, Button, PasswordInput } from "../../components";
import style from "./style.js";

import { COLORS } from "../../assets/const/colors.js";
import backgroundManagement from '../../assets/images/backgroundManagement.png';
import { ModalSavePasswordData } from "../../components/Modal/ModalSavePassword";
import { updatePasswordResponsibleService } from "../../services/responsible.js";
import { responsibleUpdatePasswordSchema } from "../../utils/validations/responsible/index.js";

export function ResponsiblePassword({ navigation }) {

    const [showModalSavePasswordData, setShowModalSavePasswordData] = useState(false);

    const handleForm = async (data) => {

        setShowModalSavePasswordData(false)

        const result = await updatePasswordResponsibleService(data)

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Senha redefinida com sucesso',
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
                    validationSchema={responsibleUpdatePasswordSchema}
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
                                    width={120}
                                    height={45}
                                    onPress={() => navigation.goBack()}
                                />
                                <Button
                                    label="CONFIRMAR"
                                    backgroundColor={COLORS.turquoise}
                                    borderRadius={15}
                                    width={120}
                                    height={45}
                                    onPress={() => setShowModalSavePasswordData(true)}
                                />
                            </View>


                            {
                                showModalSavePasswordData && (
                                    <View style={style.modalContainer}>
                                        <ModalSavePasswordData
                                            label="Tem certeza que quer redefinir a senha?"
                                            close={() => setShowModalSavePasswordData(false)}
                                            show={showModalSavePasswordData}
                                            password={() => handleSubmit()}
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


