import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text, Picker } from "react-native";
import { BlurView } from 'expo-blur';
import { FONTS, COLORS } from "../../assets/const";
import { BackButton, Button } from "../Button";
import RNPickerSelect from 'react-native-picker-select';

import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../screens/Reports/style";



const { height } = Dimensions.get('window')

export const ModalReports = ({ label, close, show, del }) => {

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

                                <View style={style.closeModalIconContainer}>

                                    <MaterialIcons
                                        name="close"
                                        size={30}
                                        style={style.closeModalIcon}
                                        onPress={close}
                                    />

                                </View>

                            

                                <View style={style.dependentsContainer}>

                                    <Text style={style.text}>Selecione a criança:</Text>
                                    <View style={styles.containerList}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            items={[
                                                { label: 'Football', value: 'football' },
                                                { label: 'Baseball', value: 'baseball' },
                                                { label: 'Hockey', value: 'hockey' },
                                            ]}
                                        />
                                    </View>
                                   
                                    <Text style={style.text}>Selecione a dinâmica:</Text>

                                    <Text style={style.text}>Selecione o periódo:</Text>

                                </View>

                                <View style={style.buttonContainer}>

                                    <Button
                                        label="GERAR"
                                        backgroundColor={COLORS.white}
                                        borderRadius={25}
                                        width={100}
                                        height={45}
                                    />

                                </View>

                            </View>


                        </BlurView>

                    </Animated.View>
                </Animated.View >
        </View>
    );

}


const style = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.red
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.blue

    },
    modalContainer: {
        height: '100%',
        width: '100%',
        // backgroundColor: COLORS.blue
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    applyGameModalContainer: {
        width: '80%',
        height: '70%',
        top: 70,
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#000',
        shadowRadius: 1,
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dependentsContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        // backgroundColor: COLORS.pink
    },
    dependentsList: {
        flexDirection: 'row'
    },
    gameContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        position: 'relative',
        // backgroundColor: COLORS.red
    },
    closeModalIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingRight: 10,
        // backgroundColor: COLORS.darkBlue
    },
    closeModalIcon: {
        // flex: .5,
        // margin: 5,
        // backgroundColor: COLORS.blue
    },
    buttonContainer: {
        flex: 1.5,
        // marginBottom: 5,
        // backgroundColor: COLORS.darkBlue
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
        // backgroundColor: COLORS.darkBlue

    },
    containerList : {
        flex            : 1,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
    },
});
