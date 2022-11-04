import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { ButtonAlert, Button} from '../../components';
import styles from './style.js';
import medal from '../../assets/images/medal.png'

export function MedalScreen({navigation}){
    return(
        <View style={styles.mainContainer}>
            <ButtonAlert/>
            <Text style={styles.text}>
                Você ganhou uma medalha!
            </Text>
            <View>
                <Image
                    style={styles.medal}
                    source={medal}
                />
            </View>
            <TouchableOpacity style={styles.buttonPlay}>
                <Text style = {styles.textPlay}>JOGAR DE NOVO</Text>
            </TouchableOpacity>
           
            <TouchableOpacity 
                style={styles.buttonGoOut}
                onPress={() => navigation.navigate('Games')}
                >
                <Text style={styles.textGoOut}>SAIR</Text>
            </TouchableOpacity>

        </View>
    );
}