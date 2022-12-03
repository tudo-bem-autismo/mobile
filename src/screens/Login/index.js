import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";

import {
    FormLogin, Google,
    Header, Login,
    LoginDescription,
    Title
} from "../../components";
import styles from "./style.js";

import headerImg from '../../assets/images/aa.png';
import background from '../../assets/images/background.png';

export function ResponsiveLogin({ navigation }) {

    return (
        <SafeAreaView style={styles.mainContainer}>

            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.background}
            >
                <Header image={headerImg} />

                <View style={styles.formContainer}>


                    <Title title="Entre na sua conta" />

                    <View style={styles.registerContainer}>

                        <View style={styles.infoContainer}>

                            {/* <FormLogin
                                navigation={navigation}
                            /> */}

                        </View>



                    </View>

                    <View style={styles.loginContainer}>
                        <Login label="ou entre com" />
                        <Google />
                        <LoginDescription
                            question="Não tem uma conta?"
                            answer="Cadastre-se"
                            navigation={navigation}
                        />
                    </View>

                </View>

            </ImageBackground>



        </SafeAreaView>
    );

}