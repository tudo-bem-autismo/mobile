import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated, Dimensions, Text, TouchableOpacity } from "react-native";

import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";

const { height } = Dimensions.get('window')

export const ModalLogOutAccount = ({ label, close, show, handleLogout }) => {

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

                <View style={style.modalContainerClose}>
                    <View style={style.questionContainer}>
                        <Text style={style.questionText}>{label}</Text>
                    </View>

                    <View style={style.buttonsContainer}>

                        <TouchableOpacity
                            style={style.button}
                            onPress={close}
                        >
                            <Text style={style.textButton}>NÃO</Text>
                        </TouchableOpacity>

                        <Button
                            label="SIM"
                            backgroundColor={COLORS.white}
                            borderRadius={15}
                            onPress={handleLogout}
                            width={55}
                            height={30}
                        />
                    </View>
                </View>



            </Animated.View>
        </Animated.View >

    );

}


const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: COLORS.darkBlue,
    },
    modalContainer: {
        width: 300,
        height: 140,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.blue,
    },
    modal: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainerClose: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    questionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    questionText: {
        fontSize: 20,
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    buttonsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 55,
    },
    button: {
        width: 80,
        height: 40,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

