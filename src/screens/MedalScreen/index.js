import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { ButtonAlert, Button} from '../../components';
import styles from './style.js';
import { Loading } from '../Loading';
import { getMedalsDependent } from '../../services/medal';

export function MedalScreen({navigation}){

    const [isLoading, setIsLoading] = useState(true);
    const [medals, setMedals] = useState([]);

    const getMedals = async () => {
        const result = await getMedalsDependent()
        setMedals(result.data)
        console.log(medals)
    }

    useEffect(() => {
        getMedals()
        setIsLoading(false)

    }, [])
    return(
        <>
        {isLoading ? (
            <Loading/>
        ) : (
            <View style={styles.mainContainer}>
                <ButtonAlert/>
                <Text style={styles.text}>
                    Você ganhou uma medalha!
                </Text>
                <View>
                    {
                        medals.map(item =>
                            <Image
                                style={styles.medal}
                                source={{uri: item.medal}}
                                key={item.id}
                                setMedals={item.id}
                                
                            />
                        )
                    }
                    
                </View>
                <TouchableOpacity
                     style={styles.buttonPlay}
                     >
                    <Text style = {styles.textPlay}>JOGAR DE NOVO</Text>
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