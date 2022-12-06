import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { ButtonAlert, Button} from '../../components';
import happy from '../../assets/images/happy.gif';


import styles from './style.js';

export function CongratulationsScreen({ route, navigation}){

    let idGames = route.params.idGames

    return(
        <View style={styles.mainContainer}>
            <ButtonAlert/>
            <Text style={styles.text}>
                Parabéns!!!
            </Text>
            <View>
                <Image
                    style={styles.happy}
                    source={happy}
                />
            </View>
         
            <TouchableOpacity style={styles.buttonPlay}
                 onPress={() => navigation.navigate('ScreenGames', idGames)}
            >
                <Text style = {styles.textPlay}>JOGAR DE NOVO</Text>
            </TouchableOpacity>
           
            <TouchableOpacity 
                style={styles.buttonGoOut}
                onPress={() => navigation.navigate('GamesDependent')}
                >
                <Text style={styles.textGoOut}>SAIR</Text>
            </TouchableOpacity>
          
        </View>
    );
}