import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ButtonAlert, Button } from '../../components';
import styles from './style.js';
import { Loading } from '../Loading';
import { getMedalsDependent } from '../../services/medal';
import { GamesDependent } from '../GamesDependent';
import { getReports } from '../../services';

export function MedalScreen({ route, navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    // const [medals, setMedals] = useState([]);
    // const [medal, setMedal] = useState()

    // const [kidData, setKidData] = useState({
    //     "acertos": 3,
    //     "erros": 2,
    //     "data": "2022-9-17 00:00:00",
    //     "id_mini_jogo": 1,
    //     "id_crianca": "4"
    // })

    // const getMedals = async () => {
    //     const result = await getMedalsDependent()
    //     setMedals(result.data)
    //     // console.log(medals)
    // }

    // const getMedal = async () => {
    //    const result = await getReports(kidData.acertos, kidData.erros, kidData.data, kidData.id_mini_jogo, kidData.id_crianca)
    //    setMedal(result)
    // //console.log(medal)

    // }


    useEffect(() => {
        if (medalha)
            setIsLoading(false)

    }, [])

    let { nome, medalha } = route.params.data
    let { idGames } = route.params

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