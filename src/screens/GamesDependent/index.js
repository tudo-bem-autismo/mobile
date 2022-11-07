
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';
import { COLORS } from '../../assets/const';
import { Game } from '../../components/Games/Game';
import { ModalApplyChildGame } from '../../components/Modal/ModalApplyChildGame';
import { getGamesService } from '../../services/game';
import { Loading } from '../Loading';
import { MainHeaderDependent } from '../../components/Header/MainHeaderDependent';

export const GamesDependent = ({ navigation }) => {

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
                    <MainHeaderDependent
                        screenName="JOGOS"
                        navigation={navigation}
                    />

                    <View style={styles.gamesContainer}>

                        <ScrollView style={styles.listGames}>

                            <View style={styles.listGamesContainer}>

                                {
                                    games?.map(item => (
                                        <Game
                                            titleGame={item.name}
                                            gifGame={{ uri: item.icon }}
                                            key={item.id}
                                            onPress={() => navigation.navigate('ScreenGames')}
                                        />
                                    ))
                                }


                            </View>
                        </ScrollView>
                    </View>

                    {/* {showModal && (
                        <ModalApplyChildGame
                            close={() => setShowModal(false)}
                            show={showModal}
                        />
                    )} */}
                </>
            )}
        </View>

    );
}