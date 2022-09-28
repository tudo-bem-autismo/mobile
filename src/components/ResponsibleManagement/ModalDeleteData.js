import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text } from "react-native";

import modalBackground from '../../assets/images/modalBackground.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";
import { responsibleManagementService } from "../../services";


const { height } = Dimensions.get('window')

export const ModalDeleteData = ({ label, close, show, del }) => {

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

                {/* <View style={style.modal}> */}
                    <ImageBackground
                        source={modalBackground}
                        style={style.modalBackground}
                        resizeMode="cover"
                    >

                        <View style={style.questionContainer}>
                            <Text style={style.questionText}>{label}</Text>
                        </View>

                        <View style={style.buttonsContainer}>
                            <Button
                                label="NÃO"
                                backgroundColor={COLORS.purple}
                                borderRadius={15} 
                                width={100}
                                height={40}
                                onPress={close}
                            />
                            <Button
                                label="SIM"
                                backgroundColor={COLORS.turquoise}
                                borderRadius={15}
                                width={100}
                                height={40}
                                onPress={del}
                            />
                        </View>
                    </ImageBackground>
                {/* </View> */}

            </Animated.View>
        </Animated.View >

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
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'absolute'
    },
    modalContainer: {
        bottom: 0,
        position: 'absolute',
        height: '50%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    modal: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: COLORS.darkBlue,
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: COLORS.gray
    },
    questionContainer: {
        flex: 1,
        width: 300,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        top: 20,
        left: 35,
        // backgroundColor: COLORS.blue,
    },
    questionText: {
        fontSize: 25,
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    buttonsContainer: {
        flex: 3,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginBottom: 100,
        margin: 15,
        // backgroundColor: COLORS.purple,
    },
    buttonContainer: {
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: 150,
        // backgroundColor: COLORS.darkBlue,
    },
    button: {
        width: 100,
        height: 48,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...bottomShadow
    },
});

