
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import feelings from '../../assets/images/feelings.gif';
import clothes from '../../assets/images/clothes.gif';
import brushingTeeth from '../../assets/images/brushingTeeth.gif';
import friends from '../../assets/images/friends.png';
import { COLORS } from '../../assets/const';

export const Games = ({ navigation }) => {

    return (


        <View style={styles.container}>

            <MainHeader screenName="GERENCIAMENTO DOS JOGOS" />

            <View style={styles.gamesContainer}>

                <Text style={styles.textSelectGame}>
                    selecione os jogos que estarão disponíveis para seu filho(a)
                </Text>

                <ScrollView style={styles.listGames}>

                    <View style={styles.listGamesContainer}>

                        <View style={styles.game}>
                            <TouchableOpacity style={styles.buttonGame}>
                                <Text style={styles.textGame}>Sentimentos</Text>
                                <View style={styles.imageGameContainer}>
                                    <Image
                                        source={feelings}
                                        resizeMode='cover'
                                        style={styles.imageGame} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.game}>
                            <TouchableOpacity style={styles.buttonGame}>
                                <Text style={styles.textGame}>Escolher roupas</Text>
                                <View style={styles.imageGameContainer}>
                                    <Image
                                        source={clothes}
                                        resizeMode='cover'
                                        style={styles.imageGame} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.game}>
                            <TouchableOpacity style={styles.buttonGame}>
                                <Text style={styles.textGame}>Escovar os dentes</Text>
                                <View style={styles.imageGameContainer}>
                                    <Image
                                        source={brushingTeeth}
                                        resizeMode='cover'
                                        style={styles.imageGame} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.game}>
                            <TouchableOpacity style={styles.buttonGame}>
                                <Text style={styles.textGame}>Sentimentos</Text>
                                <Image source={feelings} style={styles.imageGame} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>

        </View>

    );
}