
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import feelings from '../../assets/images/feelings.gif';
import clothes from '../../assets/images/clothes.gif';
import brushingTeeth from '../../assets/images/brushingTeeth.gif';
import { COLORS } from '../../assets/const';
import { Game } from '../../components/Games/Game';
import { ModalApplyChildGame } from '../../components/Modal/ModalApplyChildGame';

export const Games = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    return (


        <View style={styles.container}>

            <MainHeader screenName="GERENCIAMENTO DOS JOGOS" />

            <View style={styles.gamesContainer}>

                <Text style={styles.textSelectGame}>
                    selecione os jogos que estarão disponíveis para seu filho(a)
                </Text>

                <ScrollView style={styles.listGames}>

                    <View style={styles.listGamesContainer}>

                        <Game
                            titleGame="sentimentos"
                            gifGame={feelings}
                            onPress={() => setModal(true)}
                        />
                        <Game
                            titleGame="Escolher roupas"
                            gifGame={clothes}
                        />
                        <Game
                            titleGame="Escovar os dentes"
                            gifGame={brushingTeeth}
                        />
                        <Game
                            titleGame="sentimentos"
                            gifGame={feelings}
                        />

                        {modal && (
                            <ModalApplyChildGame
                                close={() => setModal(false)}
                                show={modal}
                            />
                        )}

                    </View>
                </ScrollView>
            </View>

        </View>

    );
}