import React from "react";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../../assets/const";
import { responsibleRegisterService } from "../../services";
import { storeData } from "../../utils/storage";
import { responsibleRegisterLoginDataSchema } from "../../utils/validations/responsible";
import { Button } from "../Button";
import { Input, PasswordInput } from "../Input";


export const LoginDataForm = ({ responsibleData, navigation }) => {

    const handleForm = async (data) => {

        const responsible = {
            ...responsibleData,
            ...data
        }

        // Chama a api enviando os dados do formulário, "data" são os "values"
        const result = await responsibleRegisterService(responsible)

        if (result.success) {
            await storeData(result.data.id, '@id')
            await storeData(data.email, '@email')
            await storeData(responsibleData.name, '@name')
            navigation.navigate('Salutation')
        }

    }

    // Todos os campos irão iniciar com esses valores, ou seja, vazios
    const initialValues = {
        email: '',
        password: '',
    }

    return (

        <View style={styles.formContainer}>

            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                // Informa como deve ser o formato dos dados
                validationSchema={responsibleRegisterLoginDataSchema}
                // Informa com quais dados o formulário irá iniciar
                initialValues={initialValues}
                // Evento de quando o formulário é enviado
                // Ele recebe todos os dados dos inputs na variável "values"
                onSubmit={values => handleForm(values)}
            >
                {/* Mais propriedades do Formik para manipular o formulário */}
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <View style={styles.inputsContainer}>
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
                            <PasswordInput
                                title="Senha"
                                placeholder="com no mínimo 4 caracteres"
                                borderColor={COLORS.yellow}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                hasError={!!errors.password}
                                errorMessage={errors.password}
                            />
                        </View>

                        <View style={styles.paginationContainer}>
                            <View style={styles.paginationButton} />
                            <View style={styles.selectedPaginationButton} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                label="CADASTRAR"
                                onPress={handleSubmit}
                                backgroundColor={COLORS.blue}
                                width={120}
                                height={45}
                                borderRadius={50}
                            />
                        </View>

                    </>
                )}
            </Formik>
        </View>
    );

}

const styles = StyleSheet.create({
    paginationStyle: {
        height: 20,
    },
    paginationContainer: {
        flex: 0.9,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    selectedPaginationButton: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        margin: 5,
        backgroundColor: COLORS.purple,
    },
    paginationButton: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        margin: 5,
    },
    inputsContainer: {
        flex: 4,
        width: '100%',
    },
    formContainer: {
        flex: 2.5,
        alignSelf: 'stretch',
    },
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
});
