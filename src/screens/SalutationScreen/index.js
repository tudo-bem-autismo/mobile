import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import kids from '../../assets/images/kids.gif'

import styles from './style.js';

export function SalutationScreen(){
    return(
        <View style = {styles.mainContainer}>
            <View style = {styles.textContainer}>
                <Text style = {styles.textName}>
                    Olá, Luisa Ribeiro
                </Text>
                <Text style = {styles.textSalutation}>
                    Eu estou feliz que você está {'\n'}
                    conosco
                </Text>
            </View>
            <TouchableOpacity
                style = {styles.buttonLets}
            >
                <Text>Vamos lá</Text>
            </TouchableOpacity>
            <View style = {styles.kidsContainer}>
                <Image
                    style = {styles.kids}
                    source= {kids}
                />
            </View>

        </View>
    );
}