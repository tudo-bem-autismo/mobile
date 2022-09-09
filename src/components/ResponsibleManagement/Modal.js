import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import modalBackground from '../../assets/images/modalBackground.png';
import { FONTS, COLORS } from "../../assets/const";
import { Button } from "../Button";



export const Modal = ({ label }) => {
    
    const [showModal, setShowModal] = useState(false);

    return (

        <View style={style.modal}>
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
                        onPress={() => setShowModal(!showModal)}
                    />
                    <Button
                        label="SIM"
                        backgroundColor={COLORS.turquoise}
                        borderRadius={15}
                    />
                </View>
            </ImageBackground>
        </View>

    );

}

const style = StyleSheet.create({
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
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
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
        paddingHorizontal: 35,
        // backgroundColor: COLORS.purple,
    },
});

