import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Game } from '../../components/Games/Game';
import { MainHeader } from '../../components/Header/MainHeader';
import { ModalApplyChildGame } from '../../components/Modal/ModalApplyChildGame';
import { getGamesService } from '../../services/game';
import { Loading } from '../Loading';
import styles from './style';

export const Games = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);

    const [selectedGameId, setSelectedGameId] = useState(null);

    const openGameModal = (gameId) => {
        setSelectedGameId(gameId)
        setShowModal(true)
    }

    const getGames = async () => {
        const result = await getGamesService()
        setGames(result.data)
        setIsLoading(false)

    }

    useEffect(() => {
        getGames()
    }, [])

    return (

        <View style={styles.container}>
            <>
                <MainHeader
                    screenName="GERENCIAMENTO DOS JOGOS"
                    navigation={navigation}
                />

                <View style={styles.gamesContainer}>

                    <Text style={styles.textSelectGame}>
                        Selecione os jogos que estarão indisponíveis para seu filho(a)
                    </Text>

                    {
                        !!isLoading ? (
                            <Loading />
                        ) : (

                            <ScrollView style={styles.listGames}>

                                <View style={styles.listGamesContainer}>

                                    {
                                        games?.map(item => (
                                            <Game
                                                titleGame={item.name}
                                                gifGame={item.icon}
                                                key={item.id}
                                                onPress={() => openGameModal(item.id)}
                                            />
                                        ))


                                    }

                                    <View style={styles.invisibleCard}></View>

                                </View>

                            </ScrollView>

                        )
                    }
                </View>

                {showModal && (
                    <ModalApplyChildGame
                        close={() => setShowModal(false)}
                        show={showModal}
                        selectedGameId={selectedGameId}
                        games={games}
                        navigation={navigation}
                    />
                )}
            </>
        </View>

    );
}