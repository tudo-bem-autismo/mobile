import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import styles from "./style.js";
import {
    BackButton,
    Google,
    Header,
    Login,
    LoginDescription,
    Title,
    Form,
    DataInput
} from "../../components";

import background from '../../assets/images/background.png';
import headerImg from '../../assets/images/gg.png'
import { FormDependentRegister } from "../../components";

export function DependentRegister({ navigation }) {

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={headerImg}
                resizeMode="cover"
                style={styles.background}>


                <View style={style.cont}>

                    <FormDependentRegister
                        navigation={navigation}
                    />


                </View>

            </ImageBackground>

        </View >

    );

}

const style = StyleSheet.create({
    cont: {
        marginTop: '60%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
})