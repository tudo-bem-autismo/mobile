import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../../assets/const";
import { responsibleRegisterPersonalDataSchema } from "../../utils/validations/responsible";
import { Button } from "../Button";
import { Input, MaskedInput } from "../Input";


export const PersonalDataForm = ({ nextFormPage, setResponsibleData }) => {

    const handleForm = async (data) => {

        setResponsibleData(data)
        nextFormPage()

    }

    // Todos os campos irão iniciar com esses valores, ou seja, vazios
    const initialValues = {
        name: '',
        phone: '',
    }

    return (

        <View style={styles.formContainer}>

            <Formik
                // Informa como deve ser o formato dos dados
                validationSchema={responsibleRegisterPersonalDataSchema}
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
                                title="Nome"
                                iconName="user-circle-o"
                                placeholder="seu nome completo"
                                borderColor={COLORS.blue}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                // Propriedade para saber se existe algum erro de validação do campo, convertendo para booleano
                                hasError={!!errors.name}
                                // Mensagem de erro vinda do yup
                                errorMessage={errors.name}
                            />
                            <MaskedInput
                                title="Telefone"
                                iconName="phone"
                                placeholder="(99) 99999-9999"
                                borderColor={COLORS.purple}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                hasError={!!errors.phone}
                                errorMessage={errors.phone}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true
                                }}
                            />
                        </View>

                        <View style={styles.paginationContainer}>
                            <View style={styles.selectedPaginationButton} />
                            <View style={styles.paginationButton} />
                        </View>

                        <Button
                            label="PRÓXIMO"
                            onPress={handleSubmit}
                        />
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
    },
    formContainer: {
        flex: 2.5,
        alignSelf: 'stretch',
    },
});
