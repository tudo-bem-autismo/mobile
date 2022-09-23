import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik} from 'formik';
import Toast  from 'react-native-toast-message';

import { COLORS } from '../../assets/const';
import { Input, PasswordInput } from '../Input';
import {Button} from '../Button'
import {responsibleLoginService} from "../../services";
import { responsibleLoginDataSchema } from '../../utils/validations/responsible';

export const FormLogin = () => {
    
  //ENVIO DOS DADOS PARA A API
  const handleForm = async (data) => {

    // Chama a api enviando os dados do formulário
    const result = await responsibleLoginService(data)

    if (result.sucess) {
        return Toast.show({
            type: 'success',
            text1: 'Login realizado com sucesso',
        });
    }

  }

  const initialValues = {
    email: '',
    password: '',
}

    return (
        
        <View style={styles.container}>

            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                // Informa como deve ser o formato dos dados
                validationSchema={responsibleLoginDataSchema}
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

                        <Button
                            label="ENTRAR"
                            onPress={handleSubmit}
                        />
                    </>
                )}

            </Formik>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        //padding: 15,
        //height: 300,
        //smarginBottom: 25
    },
    input: {
        //marginBottom: 15
    },
    inputsContainer: {
        flex: 8,
        marginBottom: 2
    },

});