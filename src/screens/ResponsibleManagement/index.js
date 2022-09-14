import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Toast from 'react-native-toast-message';
import { Formik } from "formik";


import { BackButton, Button, Input, LoginDescription, MaskedInput } from "../../components";
import style from "./style.js"; 
import { COLORS } from "../../assets/const/colors.js";
import backgroundManagement from '../../assets/images/backgroundManagement.png';
import { ModalDeleteData } from "../../components/ResponsibleManagement/ModalDeleteData.js";
import { ModalSaveData } from "../../components/ResponsibleManagement/ModalSaveData.js";
import { Profile } from "../../components/ResponsibleManagement/Profile.js";
import { getResponsibleService, updateResponsibleService } from "../../services/responsible.js";
import { responsibleUpdateSchema } from "../../utils/validations/responsible/index.js";

export function ResponsibleManagement({navigation}) {

    console.log(navigation)
    const [showModal, setShowModal] = useState(false);

    const [showModalSaveData, setShowModalSaveData] = useState(false);

    const [responsible, setResponsible] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const getUser = async () => {
        const result = await getResponsibleService()
        setResponsible(result.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getUser()
    }, [])

    const initialValues = responsible

    const handleForm = async (data) => {

        setShowModalSaveData(false)
        console.log(data)

        const result = await updateResponsibleService(data)

        if (result.success) {
            return Toast.show({
                type: 'success',
                text1: 'Dados atualizados com sucesso',
            });
        }
    }

    return (
        <View style={style.mainContainer}>
            {isLoading ? (
                <View>
                    <Text>Carregando...</Text>
                </View>
            ) : (
                <ImageBackground
                    source={backgroundManagement}
                    resizeMode="cover"
                    style={style.background}
                >

                    <BackButton title="Voltar" />

                    <Formik
                        validationSchema={responsibleUpdateSchema}
                        initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                <View style={style.formContainer}>

                                    <Profile name={values.name} />

                                    <Input
                                        title="Nome"
                                        iconName="user-circle-o"
                                        placeholder="O seu nome completo"
                                        borderColor={COLORS.blue}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        hasError={!!errors.name}
                                        errorMessage={errors.name}

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
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        hasError={!!errors.phone}
                                        errorMessage={errors.phone}
                                    />
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

                                    <LoginDescription
                                        question="Deseja redefinir a sua senha?"
                                        answer="Redefinir"
                                        navigation={navigation}
                                    />
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
                                            <ModalDeleteData
                                                label="Tem certeza que quer excluir o perfil?"
                                                close={() => setShowModal(false)}
                                                show={showModal}
                                            />
                                        </View>

                                    )
                                }


                                {
                                    showModalSaveData && (
                                        <View style={style.modalContainer}>
                                            <ModalSaveData
                                                label="Tem certeza que quer redefinir o perfil?"
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
            )}

        </View>
    );
}


