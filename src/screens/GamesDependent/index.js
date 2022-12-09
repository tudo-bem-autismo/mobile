import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Game } from '../../components/Games/Game';
import { MainHeaderDependent } from '../../components/Header/MainHeaderDependent';
import { getGameKids } from '../../services/game';
import { Loading } from '../Loading';
import styles from './style';

export const GamesDependent = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);

    const getGames = async () => {
        const result = await getGameKids()
        setGames(result.data)
    }

    const openGame = (idGames) => {
        navigation.navigate('ScreenGames', { idGames })
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
                                            gifGame={item.icon}
                                            key={item.id}
                                            onPress={() => openGame(item.id)}

                                        />

                                    ))


                                }

                                <View style={styles.invisibleCard}></View>


                            </View>
                        </ScrollView>
                    </View>

                </>
            )}
        </View>

    );
}