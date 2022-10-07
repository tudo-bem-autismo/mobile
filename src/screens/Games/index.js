
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import feelings from '../../assets/images/feelings.gif';

export const Games = ({ navigation }) => {

    return (


        <View style={styles.container}>

            <MainHeader screenName="GERENCIAMENTO DOS JOGOS" />

            <View style={styles.gamesContainer}>

                <Text style={styles.textSelectGame}>
                    selecione os jogos que estarão disponíveis para seu filho(a)
                </Text>

                <View style={styles.listGamesContainer}>
                    <ScrollView style={styles.listGames}>

                        {/* <View style={styles.game}> */}
                        <TouchableOpacity style={styles.buttonGame}>
                            <Text style={styles.textGame}>SENTIMENTOS</Text>
                            <Image source={feelings} />
                        </TouchableOpacity>
                        {/* </View> */}

                        {/* <View style={styles.game}> */}
                        <TouchableOpacity style={styles.buttonGame}>
                            <Text style={styles.textGame}>SENTIMENTOS</Text>
                            <Image source={feelings} />
                        </TouchableOpacity>
                        {/* </View> */}

                        {/* <View style={styles.game}> */}
                        <TouchableOpacity style={styles.buttonGame}>
                            <Text style={styles.textGame}>SENTIMENTOS</Text>
                            <Image source={feelings} style={styles.imageGame} />
                        </TouchableOpacity>
                        {/* </View> */}

                        {/* <View style={styles.game}> */}
                        <TouchableOpacity style={styles.buttonGame}>
                            <Text style={styles.textGame}>SENTIMENTOS</Text>
                            <Image source={feelings} style={styles.imageGame} />
                        </TouchableOpacity>
                        {/* </View> */}

                    </ScrollView>
                </View>
            </View>

        </View>

    );
}