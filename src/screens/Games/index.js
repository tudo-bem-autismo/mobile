
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';
import { MainHeader } from '../../components/Header/MainHeader';
import feelings from '../../assets/images/feelings.gif';
import clothes from '../../assets/images/clothes.gif';
import brushingTeeth from '../../assets/images/brushingTeeth.gif';
import { COLORS } from '../../assets/const';
import { Game } from '../../components/Games/Game';
import { ModalApplyChildGame } from '../../components/Modal/ModalApplyChildGame';
import { getGamesService } from '../../services/game';
import { Loading } from '../Loading';

export const Games = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);

    const getGames = async () => {
        const result = await getGamesService()
        setGames(result.data)
    }

    useEffect(() => {
        getGames()
        setIsLoading(false)
    }, [])

    return (

        <View style={styles.container}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MainHeader screenName="GERENCIAMENTO DOS JOGOS" />

                    <View style={styles.gamesContainer}>

                        <Text style={styles.textSelectGame}>
                            selecione os jogos que estarão disponíveis para seu filho(a)
                        </Text>

                        <ScrollView style={styles.listGames}>

                            <View style={styles.listGamesContainer}>

                                {
                                    games?.map(item => (
                                        <Game
                                            titleGame={item.name}
                                            gifGame={{ uri: item.icon }}
                                            key={item.id}
                                            onPress={() => setModal(true)}
                                        />
                                    ))
                                }


                            </View>
                        </ScrollView>
                    </View>

                    {modal && (
                        <ModalApplyChildGame
                            close={() => setModal(false)}
                            show={modal}
                        />
                    )}
                </>
            )}
        </View>

    );
}