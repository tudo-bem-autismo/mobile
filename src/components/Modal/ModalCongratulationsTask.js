import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text, Image } from "react-native";

import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";
import congratulations from "../../assets/images/congratulations.gif";

const { height } = Dimensions.get('window')

export const ModalCongratulationsTask = ({ close, show, navigation }) => {

    return (

        <View style={style.container}>

            <View style={style.modalContainer}>

                <View style={style.questionContainer}>

                    <Text style={style.questionText}>PARABÉNS!</Text>
                    <Text style={style.questionText}>Você completou a tarefa</Text>

                </View>

                <View style={style.imageContainer}>

                    <Image
                        source={congratulations}
                        style={style.image}
                    />

                </View>

                <View style={style.buttonsContainer}>

                    <Button
                        label="FECHAR"
                        backgroundColor={COLORS.blueLight}
                        borderRadius={50}
                        width={120}
                        height={40}
                        onPress={close}
                    />

                </View>

            </View>

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
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
    },
    modalContainer: {
        position: 'absolute',
        height: '60%',
        width: '80%',
        borderWidth: 2,
        borderColor: COLORS.blue,
        borderRadius: 15,
        top: 50,
        backgroundColor: COLORS.white,
        ...bottomShadow
    },
    questionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.blue,
    },
    questionText: {
        fontSize: 20,
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    imageContainer: {
        flex: 2,
        alignSelf: 'stretch',
        // backgroundColor: COLORS.red
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
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

