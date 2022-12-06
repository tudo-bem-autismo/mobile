import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ButtonAlert, Button } from '../../components';
import styles from './style.js';
import { Loading } from '../Loading';
import { getMedalsDependent } from '../../services/medal';
import { GamesDependent } from '../GamesDependent';
import { getReports } from '../../services';

export function MedalScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [medals, setMedals] = useState([]);
    const [medal, setMedal] = useState()

    const [kidData, setKidData] = useState({
        "acertos": 3,
        "erros": 2,
        "data": "2022-9-17 00:00:00",
        "id_mini_jogo": 1,
        "id_crianca": "4"
    })

    const getMedals = async () => {
        const result = await getMedalsDependent()
        setMedals(result.data)
        // console.log(medals)
    }

    const getMedal = async () => {
       const result = await getReports(kidData.acertos, kidData.erros, kidData.data, kidData.id_mini_jogo, kidData.id_crianca)
       setMedal(result)
    //console.log(medal)

    }


    useEffect(() => {
        getMedal()
        getMedals()
        setIsLoading(false)

    }, [])
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <View style={styles.mainContainer}>
                    <ButtonAlert />
                    <Text style={styles.text}>
                        Você ganhou uma medalha!
                    </Text>
                    <View>
                        <Image
                            style={styles.medal}
                            source={{ uri: medal.data.medalha  }}
                        />
                        
                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.buttonPlay}
                    >
                        <Text style={styles.textPlay}>JOGAR DE NOVO</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('GamesDependent')}
                        style={styles.buttonGoOut}
                    >
                        <Text style={styles.textGoOut}>SAIR</Text>
                    </TouchableOpacity>

                </View>
            )}
        </>
    );
}