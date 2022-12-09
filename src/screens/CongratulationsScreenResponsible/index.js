import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import happy from '../../assets/images/happy.gif';
import styles from './style';

export function CongratulationsScreenResponsible({ route, navigation }) {

    let { idGames } = route.params

    return (
        <View style={styles.mainContainer}>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Parabéns!!!
                </Text>
            </View>

            <View>
                <Image
                    style={styles.happy}
                    source={happy}
                />
            </View>

            <TouchableOpacity style={styles.buttonPlay}
                onPress={() => navigation.navigate('ScreenGamesResponsible', { idGames })}
            >
                <Text style={styles.textPlay}>JOGAR DE NOVO</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonGoOut}
                onPress={() => navigation.navigate('TabsResponsible')}
            >
                <Text style={styles.textGoOut}>SAIR</Text>
            </TouchableOpacity>

        </View>
    );
}