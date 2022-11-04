import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import kids from '../../assets/images/kids.gif';
import {getResponsibleService} from '../../services/responsible';

import styles from './style.js';

export function SalutationScreen({navigation}){

    const [name, setName] = useState(null);

    const getName = async () => {
        const result = await getResponsibleService()
        setName(result.data.name)

    }
    useEffect(() => {
        getName()
    }, [])


    return(
        <View style = {styles.mainContainer}>
            <View style = {styles.textContainer}>
                <Text style = {styles.textName}>
                    Olá, {name}
                </Text>
                <Text style = {styles.textSalutation}>
                    Eu estou feliz que você está {'\n'}
                    conosco
                </Text>
            </View>
            <TouchableOpacity
                style = {styles.buttonLets}
                onPress={() => navigation.navigate('TabsResponsible')}
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