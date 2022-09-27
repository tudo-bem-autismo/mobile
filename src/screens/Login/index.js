import React from "react";
import {View, SafeAreaView, ImageBackground, } from "react-native";

import styles from "./style.js";
import {
    Google,
    Header,
    Input,
    Login,
    LoginDescription,
    Title,
    FormLogin, 
    Button

} from "../../components";

import background from '../../assets/images/background.png';
import headerImg from '../../assets/images/aa.png';
import { COLORS } from "../../assets/const/colors.js";

export function ResponsiveLogin({navigation}) {
    // console.log(navigation);

    return (
        <SafeAreaView style={styles.mainContainer}>
            
            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.background}
            >
                <Header image={headerImg}/>

                <View style={styles.formContainer}>

                    
                    <Title title="Entre na sua conta"/>
        
                    <View style={styles.registerContainer}>
                        
                        <View style={styles.infoContainer}>
                           
                           <FormLogin/>

                        </View>

                        
                       
                    </View>

                    <View style={styles.loginContainer}> 
                        <Login label="ou entre com"/>
                        <Google/>
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