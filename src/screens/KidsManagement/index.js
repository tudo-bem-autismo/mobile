import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import{BackButton} from '../../components/Button';
import KidsBackground from '../../assets/images/backgroundKidsManagement.png';
import styles from './style'
import { FormRegisterDependent } from '../../components/FormRegisterDependent';

export function KidsManagement(){
    return(
        <View style = {styles.mainContainer}>
            <ImageBackground
                source = {KidsBackground}
                style = {styles.background}
                resizeMode = 'cover'            
            >
            <BackButton title="Voltar" />
            <FormRegisterDependent/>
           
            </ImageBackground>


          

        </View>
    )
}