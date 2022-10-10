import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text } from "react-native";
import { BlurView } from 'expo-blur';

import modalBackground from '../../assets/images/modalBackground.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";
import { Game } from "../Games/Game";
import feelings from '../../assets/images/feelings.gif';
import { Loading } from "../../screens/Loading";
import { getResponsibleDependentsService } from "../../services";
import { Dependent } from "../DependentListing";


const { height } = Dimensions.get('window')

export const ModalApplyChildGame = ({ label, close, show, del }) => {

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const getDependents = async () => {
        const result = await getResponsibleDependentsService()
        setDependents(result.data)

    }

    useEffect(() => {
        getDependents()
        setIsLoading(false)

    }, [])

    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    return (
        <View style={style.mainContainer}>
            {isLoading ? (
                <Loading />
            ) : (

                <Animated.View
                    style={[style.container, {
                        opacity: state.opacity,
                        transform: [
                            { translateY: state.container }
                        ]
                    }]}
                >
                    <Animated.View
                        style={[style.modalContainer, {
                            transform: [
                                { translateY: state.modal }
                            ]
                        }]}
                    >

                        <BlurView
                            intensity={30}
                            tint='light'
                            style={style.blurContainer}
                        >
                            <View style={style.applyGameModalContainer}>

                                <View style={style.gameContainer}>

                                    <Game
                                        titleGame="sentimentos"
                                        gifGame={feelings}
                                    />

                                    <Button
                                        label="JOGAR"
                                        backgroundColor={COLORS.white}
                                        borderRadius={25}
                                        width={100}
                                        height={45}
                                    />

                                </View>

                                <Text>Qual filho(a) poderá jogar?</Text>
                                <View style={style.dependentsContainer}>


                                    {
                                        dependents.map(item => (
                                            <Dependent
                                                name={item.name}
                                                photo={item.photo}
                                                key={item.id}
                                                onPress={() => setOption(true)}
                                            />
                                        ))
                                    }

                                </View>

                                    <Button
                                        label="NÃO"
                                        backgroundColor={COLORS.white}
                                        borderRadius={25}
                                        width={100}
                                        height={45}
                                        onPress={close}
                                    />

                            </View>


                        </BlurView>

                    </Animated.View>
                </Animated.View >
            )}
        </View>
    );

}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        // top: -60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: -60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        position: 'absolute',
        // top: 5,
        height: '100%',
        width: '100%',
        // backgroundColor: COLORS.blue
    },
    blurContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyGameModalContainer: {
        width: '80%',
        height: '60%',
        top: -110,
        backgroundColor: COLORS.white,
        borderColor: COLORS.purple,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#6000FF',
        shadowRadius: 1,
        elevation: 10,
        borderRadius: 5,
    },
    dependentsContainer: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: COLORS.pink
    },
    gameContainer: {
        flex: 2,
        backgroundColor: COLORS.red
    }
});
