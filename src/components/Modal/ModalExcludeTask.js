import React, { useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text } from "react-native";

import modalBackground from '../../assets/images/modalBackground.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";


const { height } = Dimensions.get('window')

export const ModalExludeTask = ({ close, show, navigation }) => {

    return (

        <View style={style.container}>

            <View style={style.modalContainer}>


                <View style={style.questionContainer}>
                    <Text style={style.questionText}>Tem certeza que deseja excluir esta tarefa?</Text>
                </View>

                <View style={style.buttonsContainer}>

                    <Button
                        label="NÃO"
                        backgroundColor={COLORS.blue}
                        borderRadius={15}
                        width={80}
                        height={45}
                        onPress={close}
                    />

                    <Button
                        label="SIM"
                        backgroundColor={COLORS.white}
                        borderRadius={15}
                        width={80}
                        height={45}
                        onPress={() => { }}
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
        zIndex: 5,
    },
    modalContainer: {
        position: 'absolute',
        height: '32%',
        width: '80%',
        top: 100,
        borderWidth: 2,
        borderColor: COLORS.blue,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        ...bottomShadow
    },
    questionContainer: {
        flex: 1.5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.blue,
    },
    questionText: {
        fontSize: 22,
        width: 300,
        fontFamily: FONTS.text,
        textAlign: 'center',
    },
    buttonsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        // backgroundColor: COLORS.purple,
    },

});

