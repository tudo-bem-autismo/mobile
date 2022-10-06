import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Swiper from 'react-native-swiper';

import { COLORS } from "../../assets/const";
import { LoginDataForm } from "./LoginDataForm";
import { PersonalDataForm } from "./PersonalDataForm";


export const FormSwiper = ({navigation}) => {
    const [formPage, setFormPage] = useState(0)

    const [responsibleData, setResponsibleData] = useState({})

    const nextFormPage = () => {
        setFormPage(formPage + 1)
    }

    const changeFormPage = (page) => {
        setFormPage(page)
    }

    return (

        <View style={styles.infoContainer}>

            <Swiper 
                index={formPage}
                showsPagination={false}
                scrollEnabled={false}
                loop={false}
            >
                <PersonalDataForm
                    nextFormPage={nextFormPage}
                    setResponsibleData={setResponsibleData}
                    changeFormPage={changeFormPage}
                    navigation={navigation}
                />
                <LoginDataForm 
                    responsibleData={responsibleData}
                    changeFormPage={changeFormPage}
                    navigation={navigation}
                />
            </Swiper>

        </View>

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
    infoContainer: {
        flex: 5,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
});
