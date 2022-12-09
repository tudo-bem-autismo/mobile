import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import happy from '../../assets/images/happy.gif';
import { ButtonAlert } from '../../components';

import styles from './style.js';

export function CongratulationsScreen({ route, navigation }) {

    let { idGames } = route.params

    return (
        <View style={styles.mainContainer}>
            <ButtonAlert />
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
                onPress={() => navigation.navigate('ScreenGames', { idGames })}
            >
                <Text style={styles.textPlay}>JOGAR DE NOVO</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonGoOut}
                onPress={() => navigation.navigate('TabsDependent')}
                >
                <Text style={styles.textGoOut}>SAIR</Text>
            </TouchableOpacity>
        </View>
    );
}