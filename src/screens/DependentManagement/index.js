import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text   } from "react-native";
import styles from "./style.js";
import {
    BackButton,
    Google,
    Header,
    Login,
    LoginDescription,
    Title,
    Form,
} from "../../components";

import backgroundManagement from '../../assets/images/backgroundKidManagement.png';
import headerImg from '../../assets/images/gg.png'
import { FormManagementDependent } from "../../components/FormManagementDependent/FormManagementDependent.js";


export function DependentManagement() {

    

    return (

        <View style={styles.mainContainer}>

            <ImageBackground

                source={backgroundManagement}
                resizeMode="cover"
                style={styles.background}>

                
                <BackButton title="voltar"/>
                

                <View style={stylesCont.cont}>
                    
                <FormManagementDependent/>
                    
                    
                </View>

            </ImageBackground>

        </View >

    );

}

const stylesCont = StyleSheet.create({
    cont: {
      marginTop: '30%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
})