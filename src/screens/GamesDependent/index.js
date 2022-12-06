import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { COLORS } from '../../assets/const';
import { Game } from '../../components/Games/Game';
import { ModalApplyChildGame } from '../../components/Modal/ModalApplyChildGame';
import { getGamesService } from '../../services/game';
import { getGameKids } from '../../services/game';
import { getGameByIdService } from '../../services/game';
import { Loading } from '../Loading';
import { ScreenGames } from '../ScreenGames';
import { MainHeaderDependent } from '../../components/Header/MainHeaderDependent';
import { getStepGames } from '../../services/game';
import { getData } from '../../utils/storage';

export const GamesDependent = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([]);
    // const [idGames, setIdGames] = useState(0)

    const getGames = async () => {
        const result = await getGameKids()
        setGames(result.data)
    }
    const openGame = (idGames) => {
    //    setIdGames()

        navigation.navigate('ScreenGames', {idGames})

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
                                            onPress={() => openGame(item.id)}

                                        />

                                    ))


                                }


                            </View>
                        </ScrollView>
                    </View>
                   
                </>
            )}
        </View>

    );
}