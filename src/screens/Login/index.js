import React from "react";
import {View, SafeAreaView, ImageBackground, KeyboardAvoidingView, ScrollView} from "react-native";

import styles from "./style.js";
import {
    Button,
    Google,
    Header,
    Input,
    Login,
    LoginDescription,
    Title,
    FormLogin

} from "../../components";

import background from '../../assets/images/background.png';
import headerImg from '../../assets/images/aa.png';

export function ResponsiveLogin() {

    return (
        <SafeAreaView style={styles.mainContainer}>
            
            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.background}
            >
                <Header image={headerImg}/>

                <View style={styles.formContainer}>

                    <KeyboardAvoidingView style={{height: 300}}>
                    
                    <Title title="Entre na sua conta"/>
        
                    <View style={styles.registerContainer}>
                        
                        <View style={styles.infoContainer}>
                           
                            <FormLogin/>
            
                        </View>

                        <Button label="ENTRAR"/>
                       
                    </View>

                    </KeyboardAvoidingView>


                    <View style={styles.loginContainer}> 
                        <Login label="ou entre com"/>
                        <Google/>
                        <LoginDescription
                            question="Não tem uma conta?"
                            answer="Cadastre-se"
                        />
                    </View> 
                </View>

            </ImageBackground>

            

        </SafeAreaView>
    );

}