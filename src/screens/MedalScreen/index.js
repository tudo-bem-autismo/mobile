import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ButtonAlert } from '../../components';
import { Loading } from '../Loading';
import styles from './style.js';

export function MedalScreen({ route, navigation }) {

    let { nome, medalha } = route.params.data
    let { idGames } = route.params

    const [isLoading, setIsLoading] = useState(true);

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