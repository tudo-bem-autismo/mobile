import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { Formik } from "formik";
import { COLORS } from "../../assets/const";
import backgroundMenuDependent from "../../assets/images/backgroundMenuDependent.png";
import { PasswordInput } from "../../components";
import { Close } from "../../components/Menu/Close.js";
import { responsibleLoginService } from "../../services";
import { getData } from "../../utils/storage";
import { responsiblePasswordLogoutAccountDependentSchema } from "../../utils/validations/responsible";
import style from "./style";

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
                    onPress={() => navigation.goBack()}
                />

                <View style={style.container}>

                    <Formik
                        validationSchema={responsiblePasswordLogoutAccountDependentSchema}
                        initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >
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

