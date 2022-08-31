import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import Swiper from 'react-native-swiper';
import Toast from 'react-native-toast-message';

import { COLORS } from "../../assets/const";
import { Input } from "../Input";
import { Button } from "../Button";
import { responsibleRegisterSchema } from "../../utils/validations/responsible";
import { responsibleRegisterService } from "../../services";


export const Form = () => {

    const [formIndex, setFormIndex] = useState(0)

    const handleForm = async (data) => {

        if (formIndex === 0)
            return setFormIndex(1)

        const result = await responsibleRegisterService(data)

        // const currentIndex = formIndex ? 0 : 1
        // setFormIndex(currentIndex)

        if (result) {
            return Toast.show({
                type: 'success',
                text1: 'Usuário cadastrado com sucesso',
            });
        }

        return Toast.show({
            type: 'error',
            text1: 'Falha ao cadastrar o usuário',
        });

    }

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        password: '',
    }

    return (
        <Formik
            validationSchema={responsibleRegisterSchema}
            initialValues={initialValues}
            onSubmit={values => handleForm(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                    <View style={styles.infoContainer}>

                        <Swiper
                            style={styles.wrapper}
                            paginationStyle={styles.paginationStyle}
                            dotStyle={styles.dot}
                            activeDotStyle={styles.selectedDot}
                            index={formIndex}
                            loop={false}
                            scrollEnabled={false}
                        >
                            <View style={styles.slide1}>

                                <Input
                                    title="Nome"
                                    iconName="user-circle-o"
                                    placeholder="seu nome completo"
                                    borderColor={COLORS.blue}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    hasError={!!errors.name}
                                    errorMessage={errors.name}
                                />
                                <Input
                                    title="Telefone"
                                    iconName="phone"
                                    placeholder="(99) 99999-9999"
                                    borderColor={COLORS.purple}
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    hasError={!!errors.phone}
                                    errorMessage={errors.phone}
                                />

                            </View>
                            <View style={styles.slide2}>

                                <Input
                                    title="Email"
                                    iconName="envelope"
                                    placeholder="exemplo@gmail.com"
                                    borderColor={COLORS.pink}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    hasError={!!errors.email}
                                    errorMessage={errors.email}
                                />
                                <Input
                                    title="Senha"
                                    iconName="phone"
                                    placeholder="com no mínimo 4 caracteres"
                                    borderColor={COLORS.yellow}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    hasError={!!errors.password}
                                    errorMessage={errors.password}
                                />
                            </View>
                        </Swiper>

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            label={formIndex === 0 ? "PRÓXIMO" : "CADASTRAR"}
                            submit={handleSubmit}
                            handleForm={handleForm}
                            errors={errors}
                            values={values}
                        />
                    </View>
                </>
            )}
        </Formik>
    );

}


const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 138,
        height: 48,
        backgroundColor: COLORS.blue,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...bottomShadow
    },
    wrapper: {
        // backgroundColor: COLORS.blue
    },
    infoContainer: {
        flex: 5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: COLORS.red,
    },
    slide1: {
        flex: 2.5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    slide2: {
        flex: 2.5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    slideButton: {
        height: 55,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    dot: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    selectedDot: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.purple,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    paginationStyle: {
        height: 20,

    }
});
