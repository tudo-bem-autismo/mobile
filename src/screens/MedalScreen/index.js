import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ButtonAlert, Button } from '../../components';
import styles from './style.js';
import { Loading } from '../Loading';
// import { getMedalsDependent } from '../../services/medal';
// import { GamesDependent } from '../GamesDependent';
// import { getReports } from '../../services';
import { getData } from '../../utils/storage';

export const MedalScreen = ({ route, navigation }) => {
    
    let { nome, medalha } = route.params.data
    let { idGames } = route.params
    const [isLoading, setIsLoading] = useState(true);
    // const idDependent = await getData('@idDependent')
    // console.log(idDependent)

    useEffect(() => {
        if (medalha)
            setIsLoading(false)

    }, [])


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <View style={styles.mainContainer}>
                    <ButtonAlert
                        onPress={() => navigation.navigate('SupportButtonForKid')}
                    />
                    <Text style={styles.text}>
                        Você ganhou uma {nome}!
                    </Text>
                    <View>
                        <Image
                            style={styles.medal}
                            source={{ uri: medalha }}
                        />

                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ScreenGames', { idGames }) }}
                        style={styles.buttonPlay}
                    >
                        <Text style={styles.textPlay}>JOGAR DE NOVO</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('TabsDependent')}
                        style={styles.buttonGoOut}
                    >
                        <Text style={styles.textGoOut}>SAIR</Text>
                    </TouchableOpacity>

                </View>
            )}
        </>
    );
}