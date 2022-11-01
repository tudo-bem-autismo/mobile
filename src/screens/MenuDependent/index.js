import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";


import style from "./style";
import backgroundMenu from "../../assets/images/backgroundMenu.png";
import Toast from 'react-native-toast-message';
import { Close } from "../../components/Menu/close.js";
import { SessionResponsible } from "../../components/Menu/SessionResponsible";
import { SessionChild } from "../../components/Menu/SessionChild";
import { SessionCompany } from "../../components/Menu/SessionCompany";
import { ModalLogOutAccount } from "../../components/Menu/ModalLogOutAccount";
import profileResponsible from "../../assets/images/profileResponsible.png";
import profileChild from "../../assets/images/profileChild.png";
import profileCompany from "../../assets/images/profileCompany.png";
import { clearData, getData } from "../../utils/storage";
import backgroundMenuDependent from "../../assets/images/backgroundMenuDependent.png";
import { PasswordInput } from "../../components";
import { COLORS } from "../../assets/const";
import { Formik } from "formik";
import { responsiblePasswordLogoutAccountDependentSchema } from "../../utils/validations/responsible";
import { getPasswordResponsibleLogoutAccountService, getResponsibleService, responsibleLoginService } from "../../services";

export const MenuDependent = ({ navigation }) => {

    const [responsible, setResponsible] = useState('');

    const getNameResponsible = async () => {

        const name = await getData('@name')

        setResponsible(name)
    }


    const handleForm = async (data) => {

        const email = await getData('@email')

        const dataAccountResponsible = {
            email: email,
            password: data.passwordResponsible
        }

        console.log(responsible)

        const result = await responsibleLoginService(dataAccountResponsible)

        if (result.sucess) {
            return (navigation.navigate('DependentListing'))
        }
    }

    useEffect(() => {
        getNameResponsible()
    }, [])

    const initialValues = {
        passwordResponsible: '',
    }

    return (
        <View style={style.mainContainer}>

            <ImageBackground
                source={backgroundMenuDependent}
                resizeMode="cover"
                style={style.background}
            >

                <Close
                    onPress={() => navigation.navigate('TabsDependent')}
                />

                <View style={style.container}>

                    <Formik
                        // Informa como deve ser o formato dos dados
                        validationSchema={responsiblePasswordLogoutAccountDependentSchema}
                        // Informa com quais dados o formulário irá iniciar
                        initialValues={initialValues}
                        // Evento de quando o formulário é enviado
                        // Ele recebe todos os dados dos inputs na variável "values"
                        onSubmit={values => handleForm(values)}
                    >
                        {/* Mais propriedades do Formik para manipular o formulário */}
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                <Text style={style.textProfileResponsible}>Voltar ao perfil do responsável: {responsible}</Text>

                                <View style={style.modalContainer}>

                                    <Text style={style.textQuestion}>Insira a senha do responsável para trocar de conta</Text>

                                    <PasswordInput
                                        borderColor={COLORS.greenBold}
                                        onChangeText={handleChange('passwordResponsible')}
                                        onBlur={handleBlur('passwordResponsible')}
                                        value={values.passwordResponsible}
                                        hasError={!!errors.passwordResponsible}
                                        errorMessage={errors.passwordResponsible}
                                    />

                                    <View style={style.buttonContainer}>
                                        <TouchableOpacity
                                            style={style.button}
                                            onPress={handleSubmit}
                                        >
                                            <Text style={style.textButton}>TROCAR DE CONTA</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </>
                        )}
                    </Formik>

                </View>

            </ImageBackground>
        </View>
    );
}

